type OrderCreatedEvent = {
  type: "order_created";
  id: string;
  object: {
    order_created: {
      created_at: string;
      location_id: string;
      order_id: string;
      state: string;
      version: 1;
    };
  };
};

export async function POST(request: Request) {
  console.log("Received webhook request", request);

  console.log("Request body", await request.text());

  return new Response("OK", { status: 200 });
}
