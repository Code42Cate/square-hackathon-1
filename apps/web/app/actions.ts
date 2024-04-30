"use server";

import { getUserAccessToken, signIn } from "@/auth";
import { Client, Environment } from "square";

export async function Signin() {
  return signIn("square", {
    redirectTo: "/seller",
  });
}

export async function getProducts() {
  const token = getUserAccessToken();

  const client = new Client({
    environment: Environment.Sandbox,
    accessToken: token,
  });

  const { result } = await client.catalogApi.listCatalog();

  if (result.errors) {
    console.error("Error retrieving catalog", result.errors);
    return [];
  }

  const ids = result.objects.map((object) => object.id);

  const { result: batchResult } =
    await client.catalogApi.batchRetrieveCatalogObjects({
      objectIds: ids,
      includeRelatedObjects: true,
    });

  return result.objects.map((object) => ({
    id: object.id,
    name: object.itemData.name,
    percentageContributed: 0,
    description: object.itemData.description,
    price: Number(
      object.itemData.variations[0].itemVariationData.priceMoney.amount,
    ),
    image: batchResult.relatedObjects.find(
      (obj) => obj.id === object.itemData.imageIds[0],
    )?.imageData.url,
  }));
}
