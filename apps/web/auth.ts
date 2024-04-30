import NextAuth from "next-auth";
import { Client, Environment, Merchant } from "square";

const callbackUrl =
  "https://impact-squared.sliplane.app/api/auth/callback/square";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    {
      id: "square", // signIn("my-provider") and will be part of the callback URL
      name: "Square", // optional, used on the default login page as the button text.
      type: "oauth", // or "oauth" for OAuth 2 providers
      clientId: process.env.AUTH_APPLICATION_ID, // from the provider's dashboard
      clientSecret: process.env.AUTH_APPLICATION_SECRET, // from the provider's dashboard
      issuer: "https://connect.squareupsandbox.com", // used to get the provider metadata
      authorization: {
        params: { scope: "MERCHANT_PROFILE_READ" },
      },
      token: {
        async request(context) {
          try {
            const { code } = context.params;

            const squareClient = new Client({
              environment: Environment.Sandbox,
            });
            const oauthInstance = squareClient.oAuthApi;
            const { result } = await oauthInstance.obtainToken({
              code,
              redirectUri: callbackUrl, // must pass it here too
              clientId: process.env.AUTH_APPLICATION_ID,
              clientSecret: process.env.AUTH_APPLICATION_SECRET,
              grantType: "authorization_code",
            });

            // match interface for Account Prisma model
            const tokens = {
              providerAccountId: result.merchantId,
              access_token: result.accessToken,
              refresh_token: result.refreshToken,
              expires_at: new Date(result.expiresAt).getTime() / 1000, // ms to sec to fit INT
              token_type: result.tokenType,
            };

            return { tokens };
          } catch (error) {
            console.log(error);
          }
        },
      },
      userinfo: {
        async request(context) {
          try {
            // refresh_token, expires_at can be used for refreshing access_token without manual sign in
            const {
              access_token,
              providerAccountId,
              refresh_token,
              expires_at,
            } = context.tokens;

            // create Api client
            // must create new client with accessToken
            const squareClient = new Client({
              environment: Environment.Sandbox,
              accessToken: access_token,
            });
            const { result } = await squareClient.merchantsApi.retrieveMerchant(
              providerAccountId as string,
            );

            // match request() signature
            return result.merchant as any;
          } catch (error) {
            console.log(error);
          }
        },
      },
      profile: (profile) => {
        // must match Prisma User model
        return {
          id: profile.id, // id will be overwritten
          name: profile.businessName,
          email: `${profile.businessName.replace(/\s+/g, "-").toLowerCase()}@square.com`, // dummy email
        };
      },
    },
  ],
});
