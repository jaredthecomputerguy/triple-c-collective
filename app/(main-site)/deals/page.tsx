import { Metadata } from "next";
import { TrapTakeover } from "./trap-takeover";
import { DealCards } from "./deal-cards";
import getPayloadClient from "@/payload/payloadClient";

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
    url: "https://triple-c-collective.vercel.app",
    description: "Lake County's Premier Cannabis Dispensary",
    images: "https://triple-c-collective.vercel.app/opengraph-image.jpg",
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deals | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: ["https://triple-c-collective.vercel.app/opengraph-image.jpg"],
  },
  metadataBase: new URL("https://triple-c-collective.vercel.app"),
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
          <DealCards deals={deals.docs} />
        </section>
      </div>
    </main>
  );
}
