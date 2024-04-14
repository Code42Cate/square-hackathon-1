"use client";
import Image from "next/image";
import { toast, Toaster } from "sonner";
import React from "react";
import Map from "@/components/map";
import { Button } from "@ui/components/ui/button";
import { EyeIcon, MapIcon } from "lucide-react";

export default function Page() {
  const [showMap, setShowMap] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      toast("Jonas just bought a coffee, donating 3€ to the campaign!");
    }, 2000);
  }, []);

  return (
    <div className="mx-auto flex max-w-6xl flex-col">
      <Toaster />

      <div className="flex hidden h-16 w-full flex-row items-center justify-between">
        <div>Create Campaign</div>
        <div className="font-bold text-green-600">
          Impact <sup>2</sup>
        </div>
        <div>Login</div>
      </div>
      <main className="mt-10 grid grid-cols-3 gap-6">
        <h1 className="col-span-3 text-4xl font-bold">
          New Playground in Karlsruher Oststadt
        </h1>
        <div className="col-span-2">
          <div className="border-neutral relative h-[500px] rounded-2xl border shadow-sm">
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
              <Map />
            ) : (
              <Image
                priority
                src="https://images.unsplash.com/photo-1611153532158-7fbd608cbb2a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

          <p>
            Join us for a heartwarming community initiative as we embark on a
            fundraising journey to build a brand new playground in the vibrant
            Karlsruher Oststadt! With laughter, joy, and boundless imagination
            in mind, we're rallying together to create a safe and engaging space
            for children to explore, play, and grow. Our fundraiser promises to
            be an event filled with fun and purpose, as we gather friends,
            families, and neighbors alike to support this important cause.
            Picture a bustling scene of bake sales, raffles, and live
            entertainment, all set against the backdrop of our shared vision for
            a brighter, more playful future. Every donation, no matter how big
            or small, brings us one step closer to realizing this dream.
            Together, let's transform our community by providing a haven where
            children can unleash their creativity, make new friends, and forge
            lasting memories. Mark your calendars and join us in making a
            difference in the Karlsruher Oststadt. Together, we can build more
            than just a playground – we can build a legacy of togetherness, joy,
            and endless possibilities.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-4 px-4">
          <div className="flex flex-row items-baseline gap-2">
            <div className="text-xl font-bold">21.445€</div>
            <div className="text-sm text-neutral-600">
              of 50.000€ goal reached
            </div>
          </div>
          <div className="relative h-2 rounded-full bg-green-200">
            <div className="h-2 w-4/5 rounded-full bg-green-500" />
          </div>
          <div className="h-60 w-full rounded-2xl border border-neutral-300 bg-gray-50 shadow-sm">
            <Image
              src="/mapbox.png"
              width={300}
              height={300}
              alt="Mapbox"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="h-60 w-full rounded-2xl border border-neutral-300 bg-gray-50 shadow-sm"></div>
          <div className="h-60 w-full rounded-2xl border border-neutral-300 bg-gray-50 shadow-sm"></div>
        </div>
      </main>
    </div>
  );
}
