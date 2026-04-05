import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { GoogleMapEmbed } from "@/app/_components/google-map-embed";
import { ImageViewer } from "@/app/_components/image-viewer";
import { FourTwentyDeals } from "@/app/(main-site)/deals/420-deals/420-deals";

import { BASE_KEYWORDS, createMetadata } from "@/lib/metadata";

import fourTwentyLogo from "@/public/images/4-20/420_logo-resized.png";
import purpleCannabisBackgroundImage from "@/public/images/4-20/purple-cannabis-bg.jpg";

const fourTwentyFlyerPath = "/images/4-20/2026/420-2026-Flyer-Final.png";

const SHOW_PAGE = true;

export const metadata: Metadata = createMetadata({
  title: "4/20 Deals",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California.",
  keywords: [...BASE_KEYWORDS, "420 deals", "4-20 deals"]
});

export default function FourTwentyDealsPage() {
  if (!SHOW_PAGE) {
    return notFound();
  }

  return (
    <main className="text-[#fefefe] relative" id="main-content">
      <Image
        className="absolute inset-0 z-0 object-cover object-center"
        src={purpleCannabisBackgroundImage}
        alt="Purple Cannabis Background Image"
        fill
        priority
        quality={100}
      />

      <div className="absolute inset-0 z-0 bg-black/40" />
      <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent via-transparent to-[#16141f]" />
      <div className="relative mx-auto max-w-7xl rounded-sm px-4 py-6 sm:py-12">
        {/* Header */}
        <div className="motion-preset-expand mx-auto flex items-center justify-center transition-all duration-300 hover:scale-110">
          <Image
            className="aspect-4/3"
            src={fourTwentyLogo}
            alt="4/20 Triple C Collective Logo"
            priority
            quality={100}
          />
        </div>

        <div className="flex flex-col items-center z-20">
          <h1 className="font-logo pb-8 text-center text-5xl font-black md:text-7xl leading-14">
            Celebrate 4/20 with Triple C
          </h1>
          <span className="w-full text-center text-2xl font-semibold uppercase font-logo">
            All Weekend
          </span>
          <span className="w-full text-center text-sm font-semibold md:text-lg">
            Trap Takeover - Friday 4/17 to Sunday 4/19
          </span>
          <span className="w-full pb-8 text-center text-sm font-semibold md:text-lg">
            4/20 Sale - Sunday 4/20
          </span>
        </div>

        {/* Flyer */}
        <div className="pb-8">
          <div className="mx-auto w-full max-w-372.25">
            <ImageViewer
              className="cursor-pointer rounded-sm border-white"
              src={fourTwentyFlyerPath}
              alt="4/20 Sales"
              width={1489}
              height={2047}
            />
            <p className="py-1 text-center text-sm font-semibold text-white">
              (Click the image to expand)
            </p>
          </div>
        </div>

        {/* Deals */}
        <FourTwentyDeals active={false} />

        <p className="px-4 text-center text-lg">
          All Sales Are While Supplies Last
        </p>

        {/* Underdog */}
        <div>
          <div className="flex flex-col pt-16 pb-4 font-semibold">
            {" "}
            <h3 className="font-logo text-4xl font-semibold">
              Free Meal from Underdog Grill
            </h3>
            <hr className="pb-4" />
            <div className="flex flex-col gap-2">
              <p className="text-xl">
                We’re teaming up with Underdog Grill this year again for 4/20.
                They’ll be posted up in our parking lot serving food all day.
              </p>
              <p className="text-xl">
                Make a purchase in the store and show your receipt at the truck
                to receive a free meal.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div>
          <div className="flex flex-col py-16 font-semibold">
            {" "}
            <h3 className="font-logo text-4xl font-semibold">
              Enter to win our 4/20 Raffle
            </h3>
            <hr className="pb-4" />
            <span className="text-xl">
              Show up on 4/20 and make a purchase to get a raffle ticket. The
              winners will be drawn on Tuesday, 4/21 at 10 AM.
            </span>
            <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
              <div>
                <h4 className="pb-2 text-3xl font-semibold">Cannabis Kit</h4>
                <p className="text-lg">
                  Swag bag filled to the brim with products totalling up to
                  $300+ and merch from your favorite brands!
                </p>
              </div>
              {/* <div>
                <h4 className="pb-2 text-3xl font-semibold">Store Credit</h4>
                <p className="text-lg">
                  Win $200 in store credit to use on your next purchase or save
                  it for a rainy day
                </p>
              </div> */}
            </div>
          </div>
          <div>
            <span className="font-logo text-4xl font-semibold">
              Find the store
            </span>
            <hr className="pb-4" />
            <GoogleMapEmbed height="500px" width="100%" />
          </div>
        </div>
      </div>
    </main>
  );
}
