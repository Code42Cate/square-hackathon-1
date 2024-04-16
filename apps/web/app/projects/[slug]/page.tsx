"use client";
import Image from "next/image";
import { toast, Toaster } from "sonner";
import React from "react";
import Map from "@/components/map";
import { Button } from "@ui/components/ui/button";
import {
  CopyIcon,
  EyeIcon,
  Facebook,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [showMap, setShowMap] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      toast("Jonas just bought a coffee, donating 3€ to the campaign!");
    }, 2000);
  }, []);

  return (
    <div className="mx-auto flex max-w-7xl flex-col">
      <Toaster />
      <main className="grid grid-cols-3 gap-6">
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
    </div>
  );
}

function SocialProof({ img, name, shop, item, amount }) {
  return (
    <div className="flex w-full flex-row gap-2">
      <Image
        alt="Product image"
        className="aspect-square rounded-md object-cover"
        height="64"
        src={img}
        width="64"
      />

      <div className="flex flex-col gap-2">
        <div>{name}</div>
        <div>
          {amount} {item} in{" "}
          <Link href="" className="underline underline-offset-2">
            {shop}
          </Link>
        </div>
      </div>
    </div>
  );
}
