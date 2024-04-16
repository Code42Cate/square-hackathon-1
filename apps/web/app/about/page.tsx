import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex flex-row items-center gap-4">
        <div>
          <Image
            alt="Jonas Scholz"
            src="/jonas.jpeg"
            width={150}
            height={150}
            className="rounded-full shadow-md"
          />
          <p>Jonas Scholz</p>
        </div>

        <div>
          <Image
            alt="Vasilis Xanthakis"
            src="/vasilis.png"
            width={150}
            height={150}
            className="aspect-square rounded-full shadow-md"
          />
          <p>Vasilis Xanthakis</p>
        </div>
      </div>

      <p className=" max-w-2xl">
        We are two sexy developers who want to make your neighbourhood a better
        place (it kinda sucks right now ngl 😬)
        <br />
        <br />
        Here is some lorem ipsum Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed ut scelerisque odio. Integer nec purus nec erat
        tincidunt ultricies. Donec nec ultricies nunc. Integer nec purus nec
        erat tincidunt ultricies. Donec nec ultricies nunc. Integer nec purus
        nec erat tincidunt ultricies. Donec nec ultricies nunc. Integer nec
        purus nec erat tincidunt ultricies. Donec nec ultricies nunc. Integer
        nec purus nec erat tincidunt ultricies. Donec nec ultricies nunc.
      </p>

      <iframe
        src="https://player.vimeo.com/video/347119375?h=1699409fe2&color=ef2200&byline=0&portrait=0"
        width="640"
        height="360"
        className="mx-auto rounded-lg"
        allow="autoplay; fullscreen; picture-in-picture"
      />
    </div>
  );
}
