import type { Metadata } from "next";
import {
  Montserrat,
  Bebas_Neue,
  Open_Sans,
  VT323,
  Birthstone,
  DM_Serif_Display,
  Emilys_Candy
} from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/app/globals.css";
import { Toaster } from "@/app/_components/toaster";
import { Debug } from "@/app/_components/debug";
import { HalloweenSnowfall } from "@/app/_components/snowfall/halloween-snowfall";

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
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
    "Clearlake"
  ],
  authors: [
    {
      name: "Jared Mercer",
      url: "https://jaredthecomputerguy.dev"
    }
  ],
  creator: "Jared Mercer",
  openGraph: {
    title: "Home | Triple C Collective",
    url: `${process.env.SITE_URL}`,
    description: "Lake County's Premier Cannabis Dispensary",
    images: `${process.env.SITE_URL}/opengraph-image.png`,
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/opengraph-image.png`]
  },
  robots: "all",
  metadataBase: new URL(process.env.SITE_URL)
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-logo"
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-stiiizy"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main"
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-trap-takeover"
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif"
});

const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-birthstone"
});

const emilysCandy = Emilys_Candy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-halloween",
  preload: false
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebasNeue.variable} ${openSans.variable} ${vt323.variable} ${birthstone.variable} ${dmSerifDisplay.variable} ${emilysCandy.variable} bg-primary-purple scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="relative">
        <HalloweenSnowfall />
        <Analytics />
        <SpeedInsights />
        <NextTopLoader color="white" />
        <Toaster />
        {children}
        <Debug active={isDev} />
      </body>
    </html>
  );
}
