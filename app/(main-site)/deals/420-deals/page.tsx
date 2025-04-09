import { type Metadata } from "next";

import Image from "next/image";

import { GoogleMapEmbed } from "../../contact/google-map-embed";
import { ImageViewer } from "@/app/_components/image-viewer";
import fourTwentyLogo from "@/public/images/4-20/420_logo-resized.png";
import { FourTwentyDeals } from "./420-deals";

const fourTwentyFlyerPath = "/images/4-20/420-flyer-with-bags.jpg";

export const metadata: Metadata = {
  title: "4/20 Deals | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California.",
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
  ],
  authors: [
    {
      name: "Jared Mercer",
      url: "https://jaredthecomputerguy.dev",
    },
  ],
  creator: "Jared Mercer",
  openGraph: {
    title: "4/20 Deals | Triple C Collective",
    url: `${process.env.SITE_URL}/deals/420-deals`,
    description: "Lake County's Premier Cannabis Dispensary",
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4/20 Deals | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/deals/420-deals/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

export default function FourTwentyDealsPage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="relative mx-auto max-w-7xl rounded px-4 py-6 sm:py-12">
        {/* Header */}
        <div className="motion-preset-expand mx-auto flex max-w-3xl items-center justify-center transition-all duration-300 hover:scale-110">
          <Image
            className="aspect-4/3"
            src={fourTwentyLogo}
            alt="4/20 Triple C Collective Logo"
            priority
            quality={100}
          />
        </div>

        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-800 to-orange-500 bg-clip-text pb-8 text-center font-logo text-5xl font-black text-transparent md:text-7xl">
          4/20 Deals
        </h1>

        {/* Flyer */}
        <div className="pb-16">
          <div className="mx-auto w-fit">
            <ImageViewer
              className="aspect-[1163/1600] h-96 w-72 cursor-pointer rounded border-white sm:h-[700px] sm:w-[500px]"
              src={fourTwentyFlyerPath}
              alt="4/20 Sales"
              width={1163}
              height={1600}
            />
            <p className="py-1 text-center text-sm font-semibold text-gray-600">
              (Click the image to expand)
            </p>
          </div>
        </div>

        {/* Deals */}

        <FourTwentyDeals />

        <p className="p-4 text-center text-lg">
          All Sales Are While Supplies Last
        </p>

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
              winners will be drawn on Monday, 4/21 at 10 PM PST.
            </span>
            <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
              <div>
                <h4 className="pb-2 text-3xl font-semibold">Cannabis Kit</h4>
                <p className="text-lg">
                  Swag bag filled to the brim with products totalling up to
                  $300+ and merch from your favorite brands!
                </p>
              </div>
              <div>
                <h4 className="pb-2 text-3xl font-semibold">Store Credit</h4>
                <p className="text-lg">
                  Win $200 in store credit to use on your next purchase or save
                  it for a rainy day
                </p>
              </div>
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
