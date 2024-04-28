import { CreateCampaignButton } from "@/components/create-campaign-button";
import Footer from "@/components/footer";
import { Button } from "@ui/components/ui/button";
import "@ui/styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white antialiased">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <div className="mt-2 flex h-16 w-full flex-row items-center justify-between">
            <CreateCampaignButton />
            <div className="text-2xl font-medium text-sky-600">
              Impact<sup>2</sup>
            </div>
            <Link
              href="/"
              className="hover:scale-102 cursor-pointer rounded-full border border-gray-500 px-2 py-1 text-gray-700 hover:border-gray-700 hover:text-gray-900 hover:transition-all"
            >
              Join as a local seller
            </Link>
          </div>

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
