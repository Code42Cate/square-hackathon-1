import ProjectPage from "@/components/projects/content";
import { prisma } from "database";
import React from "react";

export default async function Page({
  params: { slug: id },
}: {
  params: { slug: string };
}) {
  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!project) {
    return (
      <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center text-3xl font-bold">
        Project not found 😬
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col">
      <ProjectPage project={project} />
    </div>
  );
}
