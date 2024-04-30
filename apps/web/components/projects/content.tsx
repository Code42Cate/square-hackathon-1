"use client";

import Map from "@/components/map";
import { Button } from "@ui/components/ui/button";
import { toast, Toaster } from "sonner";
import {
  CopyIcon,
  EyeIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { SocialProof } from "./social-proof";
import { Project } from "database";

export default function Content({ project }: { project: Project }) {
  const [showMap, setShowMap] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      toast("Jonas just bought a coffee, donating 3€ to the campaign!");
    }, 2000);
  }, []);
  return (
    <main className="grid grid-cols-3 gap-6 px-4 py-2">
      <Toaster />
      <h1 className="col-span-3 text-balance text-3xl font-medium">
        {project.name}
      </h1>
      <div className="col-span-3 md:col-span-2">
        <div className="border-neutral relative h-min rounded-2xl border shadow-sm">
          <Button
            variant="secondary"
            onClick={() => {
              setShowMap(!showMap);
            }}
            className="absolute right-4 top-4 z-20 flex h-8 w-8 flex-col items-center justify-center"
          >
            {showMap ? (
              <EyeIcon className="h-6 w-6" />
            ) : (
              <MapIcon className="h-6 w-6" />
            )}
          </Button>
          {showMap ? (
            <Map
              lat={project.lat}
              lng={project.lng}
              className="h-full w-full"
            />
          ) : (
            <Image
              priority
              src={project.heroImage}
              width={600}
              height={400}
              alt="ALS"
              className="w-full rounded-2xl object-cover"
            />
          )}
        </div>

        <div className="flex flex-row items-center gap-4 bg-white p-4">
          <Image
            priority
            src="/avatar.png"
            width={100}
            height={100}
            alt="Vasilis Xanthakis"
            className="h-10 w-10 rounded-full object-cover"
          />

          <p className="font-medium text-neutral-900">
            Vasilis Xanthakis organisiert diese Kampagne
          </p>
        </div>

        <p className="text-pretty">{project.description}</p>
      </div>
      <div className="col-span-3 flex flex-col gap-4 md:col-span-1">
        <div className="flex flex-row items-baseline gap-2">
          <div className="text-xl font-bold">{project.fundingCurrent}€</div>
          <div className="text-sm text-neutral-600">
            of {project.fundingGoal}€ goal reached
          </div>
        </div>
        <div className="relative h-2 rounded-full bg-sky-200">
          <div className="h-2 w-4/5 rounded-full bg-sky-500" />
        </div>
        <div>32 Karlsruher shops already support this project</div>
        <Button
          variant="secondary"
          className="w-full py-6 text-lg"
          onClick={() => {
            setShowMap(true);
          }}
        >
          Find local shops
        </Button>
        <div className="flex flex-row items-center justify-between gap-2">
          <Button variant="outline">
            <TwitterIcon />
          </Button>
          <Button variant="outline">
            <InstagramIcon />
          </Button>
          <Button variant="outline">
            <FacebookIcon />
          </Button>
          <Button variant="outline">
            <MailIcon />
          </Button>
          <Button variant="outline">
            <CopyIcon />
          </Button>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <h3 className="text-lg font-medium">Recent supporters</h3>
          <SocialProof
            img="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=3696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Vasilis Xanthakis"
            amount="3"
            item="coffees"
            shop="Intro Café"
          />
          <SocialProof
            img="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Schonas Jolz"
            amount="42"
            item="books"
            shop="Buchhandlung Dummbatz"
          />{" "}
          <SocialProof
            img="https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Niglas"
            item="cakes"
            amount="3"
            shop="Bäckerei Konditorei"
          />
        </div>
      </div>
    </main>
  );
}
