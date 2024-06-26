import React from "react";
import Map from "@/components/map";
import { Metadata, ResolvingMetadata } from "next";
import Content from "@/components/cities/content";
import { cities } from "../data";
import Login from "@/components/login";
import { prisma } from "database";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;

  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return {
      title: "City not found",
    };
  }

  return {
    title: `Projects in ${city.name}`,
  };
}

export default async function Page(props: Props) {
  const city = cities.find((city) => city.slug === props.params.slug);
  if (!city) {
    return <div>City not found</div>;
  }

  const projects = await prisma.project.findMany({
    where: {
      city: city.slug,
    },
    orderBy: {
      likeCount: "desc",
    },
  });

  const shops = await prisma.shop.findMany({
    where: {
      city: city.slug,
    },
  });

  return (
    <>
      <h1 className="text-3xl font-medium">
        Create a campaign to support your Karlsruhe
      </h1>

      <Content projects={projects} />

      <div className="mt-20 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">
          Local shops that support your campaign
        </h1>
        <Map
          shops={shops}
          lat={city.coordinates.lat}
          lng={city.coordinates.lng}
        />
      </div>
    </>
  );
}
