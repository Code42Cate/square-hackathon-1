"use client";
import Image from "next/image";
import React from "react";
import HeartIcon from "@/components/heart";
import { toast } from "sonner";
import Link from "next/link";
import { CreateCampaignButton } from "../create-campaign-card";

export default function Content() {
  React.useEffect(() => {
    setTimeout(() => {
      toast("Jonas just bought a coffee, donating 3€ to the campaign!");
    }, 2000);
  }, []);

  return (
    <main className="grid grid-cols-2 gap-6 md:grid-cols-4">
      <Link href="/" className="col-span-2 min-h-[480px] rounded-lg">
        <Image
          priority
          src="https://images.unsplash.com/photo-1611153532158-7fbd608cbb2a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={600}
          height={400}
          alt="ALS"
          className="h-96 w-full rounded-2xl object-cover"
        />

        <div className="mt-4 flex flex-col gap-2">
          <h2 className="text-xl font-medium">
            Baut einen neuen Spielplatz ihr Nudeln
          </h2>

          <div className="flex flex-row items-baseline gap-2">
            <div className="font-semibold">21.445€</div>
            <div className="text-xs text-neutral-600">
              of 50.000€ goal reached
            </div>
          </div>
          <div className="relative h-2 rounded-full bg-sky-200">
            <div className="h-2 w-4/5 rounded-full bg-sky-500" />
          </div>
        </div>
      </Link>
      <div className="col-span-2 grid w-full grid-cols-2 gap-x-4 gap-y-2 rounded-lg">
        <Link href="/" className="relative h-56 space-y-1 rounded-lg">
          <Image
            priority
            src="https://images.unsplash.com/photo-1712578980535-ee64f5a3ee3a?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={150}
            height={150}
            alt="ALS"
            className="h-48 w-full rounded-lg object-cover"
          />

          <span className="absolute left-2 top-1 flex flex-row items-center gap-x-1 rounded-full bg-black/50 px-2 py-1 text-sm font-medium text-white">
            <HeartIcon className="text-red-500" />
            10 likes
          </span>

          <div className="flex flex-row items-center gap-2">
            Baut ne coole Kirche
          </div>
        </Link>
        <Link href="/" className="relative h-56 space-y-1 rounded-lg">
          <Image
            priority
            src="https://images.unsplash.com/photo-1712730642507-d4ad0904e997?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={600}
            height={400}
            alt="ALS"
            className="h-48 w-full rounded-lg object-cover"
          />
          <span className="absolute left-2 top-1 flex flex-row items-center gap-x-1 rounded-full bg-black/50 px-2 py-1 text-sm font-medium text-white">
            <HeartIcon className="text-red-500" />3 likes
          </span>
          <div className="truncate">Finanziert meine Wohnung 🥺</div>
        </Link>

        <Link
          href="/"
          className="relative row-start-2 flex h-56 flex-col space-y-1 rounded-lg"
        >
          <Image
            priority
            src="https://images.unsplash.com/photo-1712222237160-a4a3d6be5e1c?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={600}
            height={400}
            alt="ALS"
            className="h-48 w-full rounded-lg object-cover"
          />
          <span className="absolute left-2 top-1 flex flex-row items-center gap-x-1 rounded-full bg-black/50 px-2 py-1 text-sm font-medium text-white">
            <HeartIcon className="text-red-500" />0 likes
          </span>
          <div>Baum hihi XD</div>
        </Link>

        <CreateCampaignButton />
      </div>
    </main>
  );
}
