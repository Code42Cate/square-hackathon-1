import { CreateCampaignButton } from "@/components/create-campaign-button";
import Footer from "@/components/footer";
import "@ui/styles/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-2 md:px-0">
      <div className="mt-2 flex h-16 w-full flex-row items-center justify-between">
        <CreateCampaignButton />
        <div className="text-2xl font-medium text-sky-600">
          Impact<sup>2</sup>
        </div>
        <Link
          href="/"
          className="hover:scale-102 flex h-10 cursor-pointer flex-row items-center truncate rounded-full border border-gray-500 px-2 py-1 text-xs text-gray-700 hover:border-gray-700 hover:text-gray-900 hover:transition-all md:text-base"
        >
          Join as a local seller
        </Link>
      </div>

      {children}
      <Footer />
    </div>
  );
}
