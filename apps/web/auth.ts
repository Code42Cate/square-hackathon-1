import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    {
      id: "square", // signIn("my-provider") and will be part of the callback URL
      name: "Square", // optional, used on the default login page as the button text.
      type: "oauth", // or "oauth" for OAuth 2 providers
      clientId: process.env.AUTH_APPLICATION_ID, // from the provider's dashboard
      clientSecret: process.env.AUTH_APPLICATION_SECRET, // from the provider's dashboard
      issuer: "https://connect.squareup.com", // used to get the provider metadata
      authorization: {
        params: { scope: "MERCHANT_PROFILE_READ" },
      },
    },
  ],
});
