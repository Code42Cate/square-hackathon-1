"use client";
import Image from "next/image";
import React from "react";
import HeartIcon from "@/components/heart";
import { toast } from "sonner";
import Link from "next/link";
import { CreateCampaignButton } from "../create-campaign-card";
import { Project } from "database";

export default function Content({ projects }: { projects: Project[] }) {
  React.useEffect(() => {
    setTimeout(() => {
      toast("Jonas just bought a coffee, donating 3€ to the campaign!");
    }, 2000);
  }, []);

  return (
    <main className="grid grid-cols-2 gap-6 md:grid-cols-4">
      <Link
        href={`/projects/${projects[0].id}`}
        className="col-span-2 min-h-[480px] rounded-lg"
      >
        <Image
          priority
          src={projects[0].heroImage}
          width={600}
          height={400}
          alt="ALS"
          className="h-96 w-full rounded-2xl object-cover"
        />

        <div className="mt-4 flex flex-col gap-2">
          <h2 className="text-xl font-medium">{projects[0].name}</h2>

          <div className="flex flex-row items-baseline gap-2">
            <div className="font-semibold">{projects[0].fundingCurrent}€</div>
            <div className="text-xs text-neutral-600">
              of {projects[0].fundingGoal}€ goal reached
            </div>
          </div>
          <div className="relative h-2 rounded-full bg-sky-200">
            <div className="h-2 w-4/5 rounded-full bg-sky-500" />
          </div>
        </div>
      </Link>
      <div className="col-span-2 grid w-full grid-cols-2 gap-x-4 gap-y-2 rounded-lg">
        <Link
          href={`/projects/${projects[1].id}`}
          className="relative h-56 space-y-1 rounded-lg"
        >
          <Image
            priority
            src={projects[1].heroImage}
            width={150}
            height={150}
            alt="ALS"
            className="h-48 w-full rounded-lg object-cover"
          />

          <span className="absolute left-2 top-1 flex flex-row items-center gap-x-1 rounded-full bg-black/50 px-2 py-1 text-sm font-medium text-white">
            <HeartIcon className="text-red-500" />
            {projects[1].likeCount} likes
          </span>

          <div className="flex flex-row items-center gap-2">
            {projects[1].name}
          </div>
        </Link>
        <Link
          href={`/projects/${projects[2].id}`}
          className="relative h-56 space-y-1 rounded-lg"
        >
          <Image
            priority
            src={projects[2].heroImage}
            width={600}
            height={400}
            alt="ALS"
            className="h-48 w-full rounded-lg object-cover"
          />
          <span className="absolute left-2 top-1 flex flex-row items-center gap-x-1 rounded-full bg-black/50 px-2 py-1 text-sm font-medium text-white">
            <HeartIcon className="text-red-500" />
            {projects[2].likeCount} likes
          </span>
          <div className="truncate">{projects[2].name}</div>
        </Link>

        <Link
          href={`/projects/${projects[3].id}`}
          className="relative row-start-2 flex h-56 flex-col space-y-1 rounded-lg"
        >
          <Image
            priority
            src={projects[3].heroImage}
            width={600}
            height={400}
            alt="ALS"
            className="h-48 w-full rounded-lg object-cover"
          />
          <span className="absolute left-2 top-1 flex flex-row items-center gap-x-1 rounded-full bg-black/50 px-2 py-1 text-sm font-medium text-white">
            <HeartIcon className="text-red-500" />
            {projects[3].likeCount} likes
          </span>
          <div>{projects[3].name}</div>
        </Link>

        <CreateCampaignButton />
      </div>
    </main>
  );
}
