import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { z } from "zod";

import { Logger } from "@/lib/logger";
import { baseMetadata, createMetadata } from "@/lib/metadata";

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

  return createMetadata({
    title: `Best of Lake and Mendocino ${year}`,
    description:
      "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest. Proudly nominated across multiple categories, we're honored to serve our community with the best cannabis products and service.",
    keywords: [
      ...(baseMetadata.keywords as string[]),
      "trap takeover",
      "cannabis sale",
      "cannabis bogo",
      "flower sale",
      "edible sale",
      "cartridge sale",
      `Best of Lake and Mendocino ${year}`,
      `Cannabis contest ${year}`
    ],
    canonical: `/best-of-lake-and-mendocino/${year}`,
    openGraph: {
      description:
        "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest."
    },
    twitter: {
      description:
        "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest."
    }
  });
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
