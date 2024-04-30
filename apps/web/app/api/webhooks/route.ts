import { prisma } from "database";
import { Client, Environment } from "square";

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

// SQUARE webhook handler that listens for order_created events
export async function POST(request: Request) {
  const body: OrderCreatedEvent = await request.json();

  const client = new Client({
    environment: Environment.Sandbox,
    accessToken: getUserAccessToken(),
  });

  // retrieve order
  const { result } = await client.ordersApi.retrieveOrder(body.id);

  if (result.errors) {
    console.error("Error retrieving order", result.errors);
    return new Response("Error", { status: 500 });
  }

  // get all purchased items
  const itemsIds = result.order.lineItems.map((item) => item.uid);

  // only retrieve items that shop owners have agreed to donate a percentage of
  const items = await prisma.product.findMany({
    where: {
      squareItemId: {
        in: itemsIds,
      },
    },
  });

  // calculate total amount contributed
  const totalContributed = items.reduce(
    (total, item) => total + item.price * (item.percentageContributed / 100),
    0,
  );

  // find the current project
  const project = await prisma.project.findFirst({
    orderBy: {
      likeCount: "desc",
    },
  });

  if (!project) {
    console.error("No projects found");
    return new Response("Error", { status: 500 });
  }

  // update the project with the new funding amount
  await prisma.project.update({
    where: {
      id: project.id,
    },
    data: {
      fundingCurrent: (project.fundingCurrent += totalContributed),
    },
  });

  return new Response("OK", { status: 200 });
}

function getUserAccessToken(userId?: string) {
  return "EAAAl3uEAmzADix5JVWyLWX3o5_j3i95hjFtmwVUQN4dhH1jhKHhfS5lqrD6nx74";
}
