import { Metadata } from "next";
import { TrapTakeover } from "./trap-takeover";
import { DealCards } from "./deal-cards";
import getPayloadClient from "@/payload/payloadClient";
import Image from "next/image";
import { Button } from "@/app/_components/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Deals | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California.",
  keywords: [
    "cannabis",
    "dispensary",
    "marijuana",
    "weed",
    "pot",
    "Lake County",
    "California",
    "Triple C Collective",
    "flower",
    "dab",
    "concentrate",
    "edibles",
    "cbd",
    "kratom",
    "wellness",
    "Clearlake",
  ],
  authors: [
    {
      name: "Jared Mercer",
      url: "https://jaredthecomputerguy.dev",
    },
  ],
  creator: "Jared Mercer",
  openGraph: {
    title: "Deals | Triple C Collective",
    url: `${process.env.SITE_URL}/deals`,
    description: "Lake County's Premier Cannabis Dispensary",
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deals | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/deals/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

export default async function DealsPage() {
  const payloadClient = await getPayloadClient();

  const deals = await payloadClient.find({
    collection: "deals",
    where: {
      active: {
        equals: true,
      },
    },
  });

  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <h1 className="py-2 font-logo text-5xl font-semibold">
          Trap Takeover Countdown
        </h1>
        <hr className="pb-12" />
        <TrapTakeover />
        <section className="py-12">
          <h1 className="py-2 font-logo text-5xl font-semibold">
            Current Deals
          </h1>
          <hr className="pb-4" />
          {deals.docs.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-12 py-8 md:py-16">
              <Image
                className="h-96 w-96"
                src="/images/empty-deals.svg"
                alt="No deals"
                width={300}
                height={300}
              />
              <p className="text-center text-3xl">
                There are no active promotions.
              </p>
              <Button
                className="rounded bg-primary-purple px-6 py-6 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 md:text-xl"
                asChild
              >
                <Link
                  href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
                  target="_blank"
                >
                  Shop All Products
                </Link>
              </Button>
            </div>
          ) : (
            <DealCards deals={deals.docs} />
          )}
        </section>
      </div>
    </main>
  );
}
