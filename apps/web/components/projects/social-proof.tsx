import Image from "next/image";
import Link from "next/link";

export function SocialProof({ img, name, shop, item, amount }) {
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
          <Link href="/" className="underline underline-offset-2">
            {shop}
          </Link>
        </div>
      </div>
    </div>
  );
}
