export async function GET(request: Request) {
  console.log("Received webhook request", request);

  console.log("Request body", await request.text());

  return new Response("OK", { status: 200 });
}
