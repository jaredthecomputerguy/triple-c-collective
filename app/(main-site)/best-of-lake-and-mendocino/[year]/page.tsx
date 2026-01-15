import { Logger } from "@/lib/logger";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { z } from "zod";

type BestOfLakeAndMendocinoYearPageProps = {
  params: Promise<{ year: string }>;
};

// TODO: Update this to be a `z.union([z.literal("2026"), z.literal("2027"), ...])` of all years we particpate
const participatingAwardYearSchema = z.literal("2026"); //z.literal("2026");

const parseYear = (year: string) => {
  const { data, success, error } = participatingAwardYearSchema.safeParse(year);

  if (!success) {
    Logger.error(
      "Parse error:",
      error?.flatten().formErrors[0],
      `on "/best-of-lake-and-mendocino/${year}"`
    );
    return notFound();
  } else {
    return data;
  }
};

export async function generateMetadata({
  params
}: BestOfLakeAndMendocinoYearPageProps): Promise<Metadata> {
  const { year: rawYear } = await params;

  const year = parseYear(rawYear);

  const title = `Best of Lake and Mendocino ${year} | Triple C Collective`;
  const siteUrl = process.env.SITE_URL;

  return {
    title,
    description:
      "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest. Proudly nominated across multiple categories, we’re honored to serve our community with the best cannabis products and service.",
    keywords: [
      "cannabis",
      "cannabis store",
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
      "trap takeover",
      "cannabis sale",
      "cannabis bogo",
      "flower sale",
      "edible sale",
      "cartridge sale",
      `Best of Lake and Mendocino ${year}`,
      `Cannabis contest ${year}`
    ],
    authors: [
      {
        name: "Jared Mercer",
        url: "https://jaredthecomputerguy.dev"
      }
    ],
    creator: "Jared Mercer",
    openGraph: {
      title: ``,
      url: `${process.env.SITE_URL}`,
      description:
        "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest.",
      images: `${siteUrl}/opengraph-image.png`,
      siteName: "Triple C Collective",
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest.",
      images: [`${siteUrl}/opengraph-image.png`]
    },
    robots: "all",
    metadataBase: new URL(`${siteUrl}`)
  };
}

export default async function BestOfLakeAndMendocinoPage({
  params
}: BestOfLakeAndMendocinoYearPageProps) {
  const { year: rawYear } = await params;

  const year = parseYear(rawYear);

  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <h1 className="font-logo py-4 text-4xl font-semibold">
          Best of Lake &amp; Mendocino {year}
        </h1>
        <hr className="pb-4" />
      </div>
    </main>
  );
}
