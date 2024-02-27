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
