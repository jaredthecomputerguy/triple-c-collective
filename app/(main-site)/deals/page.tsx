import { Metadata } from "next";
import { TrapTakeoverCountdown } from "./trap-takeover-countdown";
import getPayloadClient from "@/payload/payloadClient";
import Image from "next/image";
import { Button } from "@/app/_components/button";
import Link from "next/link";
import { DealCategory } from "./deal-category";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const payloadClient = await getPayloadClient();

  const deals = await payloadClient.find({
    collection: "deals",
    where: {
      active: {
        equals: true,
      },
    },
    sort: "-updatedAt",
  });

  // Get unique brands from deals by creating a Set from the array of brands.
  // This is used to generate the SEO keywords for the page.
  const dealBrands = new Set(deals.docs.map((deal) => deal.brand).flat());

  return {
    title: "Deals | Triple C Collective",
    description:
      "Check out Lake County's premier cannabis dispensary for the latest deals on flower, dabs, concentrates, edibles, and more.",
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
      ...dealBrands,
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
}

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

  const flowerAndPrerollDeals = deals.docs.filter((deal) => {
    return (
      deal.categories?.includes("flower") ||
      deal.categories?.includes("preroll")
    );
  });

  const edibleAndBeverageDeals = deals.docs.filter((deal) => {
    return (
      deal.categories?.includes("edible") ||
      deal.categories?.includes("beverage")
    );
  });

  const extractDeals = deals.docs.filter((deal) => {
    return deal.categories?.includes("extract");
  });

  const cartridgeDeals = deals.docs.filter((deal) => {
    return deal.categories?.includes("cartridge");
  });

  const pillAndTinctureDeals = deals.docs.filter((deal) => {
    return (
      deal.categories?.includes("pill") || deal.categories?.includes("tincture")
    );
  });

  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <section>
          <h1 className="py-4 font-logo text-4xl font-semibold">
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
            <>
              <DealCategory
                categoryTitle="Flower & Prerolls"
                categorySubtitle="Discover premium buds and perfectly rolled convenience."
                deals={flowerAndPrerollDeals}
              />
              <DealCategory
                categoryTitle="Edibles & Beverages"
                categorySubtitle="Deliciously infused treats and drinks to elevate your experience."
                deals={edibleAndBeverageDeals}
              />
              <DealCategory
                categoryTitle="Cartridges"
                categorySubtitle="High-quality vape options for smooth and potent hits."
                deals={cartridgeDeals}
              />
              <DealCategory
                categoryTitle="Extracts"
                categorySubtitle="Concentrated excellence for the true connoisseur."
                deals={extractDeals}
              />
              <DealCategory
                categoryTitle="Pills and Tinctures"
                categorySubtitle="Discreet, easy-to-dose options for tailored relief."
                deals={pillAndTinctureDeals}
              />
            </>
          )}
        </section>
        <section className="py-12">
          <TrapTakeoverCountdown
            linkUrl="/deals/trap-takeover"
            labelText="Learn more"
          />
        </section>
      </div>
    </main>
  );
}
