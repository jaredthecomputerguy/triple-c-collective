import { Metadata } from "next";
import { TrapTakeover } from "./trap-takeover";
import { DealCards } from "./deal-cards";
import getPayloadClient from "@/payload/payloadClient";

export const metadata: Metadata = {
  title: "Deals | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
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
    <main className="max-w-4xl mx-auto sm:py-12 py-6 px-4 bg-[#fefefe]" id="main-content">
      <h1 className="text-4xl py-4 font-semibold">Deals</h1>
      <hr className="pb-4" />
      <TrapTakeover />
      <div className="grid grid-cols-1">
        <DealCards deals={deals.docs} />
      </div>
    </main>
  );
}
