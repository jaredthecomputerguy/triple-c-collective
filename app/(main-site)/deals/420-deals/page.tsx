import localFont from "next/font/local";
import { LiaCannabisSolid, LiaCookieBiteSolid } from "react-icons/lia";
import { PiFlowerThin } from "react-icons/pi";
import { GiMasonJar } from "react-icons/gi";
import { SlPresent } from "react-icons/sl";

import { cn } from "@/lib/utils";
import { CartridgeIcon } from "@/app/_components/icons/cartridge";
import { GoogleMapEmbed } from "../../contact/google-map-embed";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageViewer } from "@/app/_components/image-viewer";

const smokeFont = localFont({
  src: "smoke.ttf",
});

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
  return notFound();
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="mx-auto max-w-7xl rounded bg-[#fefefe] px-4 py-6 sm:py-12">
        <h1
          className={cn(
            smokeFont.className,
            "mx-auto mb-16 text-center text-6xl font-bold text-primary-purple sm:text-8xl",
          )}
        >
          420 is here!
        </h1>
        <div className="pb-16">
          <div className="mx-auto w-fit">
            <ImageViewer
              className="aspect-[1163/1600] h-96 w-72 cursor-pointer rounded border-white sm:h-[700px] sm:w-[500px]"
              src="/images/420-flyer.jpg"
              alt="4/20 Sales"
              width={1163}
              height={1600}
            />
            <p className="py-1 text-center text-sm font-semibold text-gray-600">
              (Click the image to expand)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex w-full flex-col items-center rounded-lg border-2 border-white bg-primary-purple p-4 text-white md:gap-6 md:px-8">
              <h2 className="flex flex-col items-center justify-center pb-4 text-center font-logo text-3xl font-semibold">
                <LiaCannabisSolid className="h-12 w-12" />
                Flower
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col text-left font-semibold">
                  {" "}
                  Get a gram of the following brands for only 25¢: Eighty East,
                  B.O.B, Glasshouse Farms, High Grade
                  <span className="w-full text-sm">(Limit 4 per customer)</span>
                </div>
                <div className="flex flex-col font-semibold ">
                  {" "}
                  $1.50 for a Papa&apos;s Herb 1g infused pre-roll
                  <span className="sm w-full text-sm">
                    (Limit 1 per customer)
                  </span>
                </div>
                <div className="flex flex-col text-pretty font-semibold ">
                  {" "}
                  Purchase any 1/8th, 1/4oz, or 1/2oz and get two Phat Panda or
                  one High Grade Farms 1/8th for a penny
                  <span className="sm w-full text-sm">
                    (Limit 2 Phat Panda or 1 High Grade Farms per customer)
                  </span>
                </div>
                <div className="flex flex-col text-pretty font-semibold ">
                  {" "}
                  Purchase any 1oz flower and get two Phat Panda gummies for a
                  penny
                  <span className="sm w-full text-sm">
                    (Limit 2 per customer)
                  </span>
                </div>
                <div className="flex flex-col text-pretty font-semibold ">
                  {" "}
                  Purchase any preroll, and get two penny prerolls from the
                  following brands:
                  <br />
                  <span className="text-sm">
                    Glasshouse Farms, Mas Cannabis, Phat Panda
                  </span>
                  <span className="sm w-full text-sm">
                    (Limit 2 per customer)
                  </span>
                </div>
                <div className="flex flex-col text-pretty font-semibold">
                  {" "}
                  Reduced Prices on the following products:
                  <ul className="list-inside list-disc py-2 text-left text-sm">
                    <li>Snicklefritz - Oreoz 3.5g</li>
                    <li>Big Boy Dro - Kung Pao 3.5g</li>
                    <li>Big Boy Dro - Franco&apos;s Secret Stash 3.5g</li>
                    <li>Big Boy Dro - Raspberry Gelato 3.5g</li>
                    <li>Big Boy Dro - Rico Suave 3.5g</li>
                    <li>El Blunto - Rose Petal Preroll</li>
                    <li>Koa - XJ13 x Truffle Monkey Preroll Pack</li>
                    <li>Koa - Garlic Cocktail x Oreoz Preroll Pack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex h-full w-full flex-col items-center rounded-lg border-2 border-primary-purple bg-white p-4 text-primary-purple md:gap-6 md:px-8">
              <h2 className="flex flex-col items-center justify-center pb-4 font-logo text-3xl font-semibold">
                <LiaCookieBiteSolid className="h-12 w-12" />
                Edibles
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col font-semibold ">
                  {" "}
                  Purchase any drink and get an Uncle Arnie&apos;s full-size or
                  single serving drink for a penny
                  <span className="sm w-full text-sm">
                    (Limit 1 per customer)
                  </span>
                </div>
                <div className="flex flex-col font-semibold ">
                  {" "}
                  Purchase any edible and get another for a penny from the
                  following brands: Big Pete&apos;s, Emerald Sky, Gelato, or
                  Kushy Punch
                  <span className="w-full text-sm">(Limit 1 per customer)</span>
                </div>
                <div className="flex flex-col text-pretty font-semibold">
                  {" "}
                  Reduced Prices on the following products:
                  <ul className="list-inside list-disc py-2 text-left text-sm">
                    <li>Emerald Sky - Hybrid Peanut Butter Cups</li>
                    <li>High Spirits - Pineapple Mango Gummies</li>
                    <li>PLUS - Clementine Gummies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex h-full w-full flex-col items-center rounded-lg border-2 border-white bg-primary-purple p-4 text-white md:gap-6 md:px-8">
              <h2 className="flex flex-col items-center justify-center pb-4 font-logo text-3xl font-semibold">
                <PiFlowerThin className="h-12 w-12" />
                Concentrates
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col font-semibold ">
                  {" "}
                  Purchase any concentrate and get a Snicklefritz or Elyon
                  concentrate for a penny
                  <span className="sm w-full text-sm">
                    (Limit 1 per customer)
                  </span>
                </div>
                <div className="flex flex-col font-semibold ">
                  {" "}
                  B.O.B. Stash kief is available for $5
                  <span className="w-full text-sm">(Limit 2 per customer)</span>
                </div>
                <div className="flex flex-col text-pretty font-semibold">
                  {" "}
                  Reduced Prices on the following products:
                  <ul className="list-inside list-disc py-2 text-left text-sm">
                    <li>Gelato - Apple Fritter Sugar</li>
                    <li>Gelato - Sugar Melon</li>
                    <li>Midsfactory - Alien Lemons Crumble</li>
                    <li>Midsfactory - Liberty Haze Live Diamond Sauce</li>
                    <li>Midsfactory - Papaya&apos;s Gift Live Diamond Sauce</li>
                    <li>Midsfactory - Apple Kush Live Diamond Sauce</li>
                    <li>Midsfactory - Cookies N Cream Live Diamond Sauce</li>
                    <li>Midsfactory - PB&J Live Diamond Sauce</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex h-full w-full flex-col items-center rounded-lg border-2 border-primary-purple bg-white p-4 text-primary-purple md:gap-6 md:px-8">
              <h2 className="flex flex-col items-center justify-center pb-4 font-logo text-3xl font-semibold">
                <CartridgeIcon className="h-12 w-12" />
                Cartridges
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col font-semibold ">
                  {" "}
                  Purchase any full or half gram cartridge and get another
                  cartridge or disposable from the following brands:
                  Midsfactory, Oh Well, Kushy Punch
                  <span className="sm w-full text-sm">
                    (Limit 3 per customer)
                  </span>
                </div>
                <div className="flex flex-col text-pretty font-semibold">
                  {" "}
                  Reduced Prices on the following products:
                  <ul className="list-inside list-disc py-2 text-left text-sm">
                    <li>Midsfactory - Banana OG 1g Cartridge</li>
                    <li>Midsfactory - Blackberry Kush 1g Cartridge</li>
                    <li>Papa&apos;s Herb - Tangie 1g Cartridge</li>
                    <li>Oh Well - Bird Poop 1g Cartridge</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex h-full w-full flex-col items-center rounded-lg border-2 border-white bg-primary-purple p-4 text-white md:gap-6 md:px-8">
              <h2 className="flex flex-col items-center justify-center pb-4 font-logo text-3xl font-semibold">
                <GiMasonJar className="h-12 w-12" />
                Tinctures & Topicals
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col font-semibold ">
                  {" "}
                  Purchase any tablet, tincture, topical, or syringe and get a 3
                  pack of LEVEL Rosin Tabs or 25mg RSO tablets for a penny
                  <span className="sm w-full text-sm">
                    (Limit 1 per customer)
                  </span>
                </div>
                <div className="flex flex-col text-pretty font-semibold">
                  {" "}
                  Reduced Prices on the following products:
                  <ul className="list-inside list-disc py-2 text-left text-sm">
                    <li>
                      Yummi Karma - Lights Out Marshmallow 1000mg Tincture
                    </li>
                    <li>Yummi Karma - Strawberry Lemonade 1000mg Tincture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex h-full w-full flex-col items-center rounded-lg border-2 border-primary-purple bg-white p-4 text-primary-purple md:gap-6 md:px-8">
              <h2 className="flex flex-col items-center justify-center pb-4 font-logo text-3xl font-semibold">
                <SlPresent className="h-10 w-10" />
                And other deals
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col font-semibold">
                  {" "}
                  With every single purchase, get a pack of Phat Panda gummies
                  for a penny
                  <span className="sm w-full text-sm">
                    (Limit 1 per customer)
                  </span>
                </div>
                <div className="flex flex-col font-semibold">
                  {" "}
                  And more deals potentially to come!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-16 font-semibold">
          {" "}
          <h3 className="font-logo text-4xl font-semibold">Enter to win</h3>
          <hr className="pb-4" />
          <span className="text-xl">
            Show up on 4/20 and make a purchase to get a raffle ticket. The
            winners will be drawn on Sunday, 4/21 at 12 PM PST.
          </span>
          <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
            <div>
              <h4 className="pb-2 text-3xl font-semibold">Cannabis Kit</h4>
              <p className="text-lg">
                Includes a glass bong, merch, a drawstring bag, two rolling
                trays, and much more
              </p>
            </div>
            <div>
              <h4 className="pb-2 text-3xl font-semibold">Store Credit</h4>
              <p className="text-lg">
                Win $155 in store credit to use on your next purchase or save it
                for a rainy day
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
    </main>
  );
}
