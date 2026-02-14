import type { ReactNode } from "react";
import type { Metadata } from "next";
import {
  Montserrat,
  Bebas_Neue,
  Open_Sans,
  VT323,
  Birthstone,
  DM_Serif_Display,
  Emilys_Candy,
  Courgette
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "@/app/_components/toaster";
import { Debug } from "@/app/_components/debug";
import { Progress } from "@/app/_components/progress";

import { createMetadata } from "@/lib/metadata";

import "@/app/globals.css";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 16 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence."
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-logo",
  preload: false
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-stiiizy",
  preload: false
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main",
  preload: false
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-trap-takeover",
  preload: false
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
  preload: false
});

const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-birthstone",
  preload: false
});

const emilysCandy = Emilys_Candy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-halloween",
  preload: false
});

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courgette",
  preload: false
});

const isDev = process.env.NODE_ENV === "development";

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const fontVars = [
    montserrat,
    bebasNeue,
    openSans,
    vt323,
    dmSerifDisplay,
    birthstone,
    emilysCandy,
    courgette
  ]
    .map((font) => font.variable)
    .join(" ");

  return (
    <html
      lang="en"
      className={`bg-primary-purple scroll-smooth ${fontVars}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth">
      <body className="relative">
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Progress>{children}</Progress>
        <Debug active={isDev} />
      </body>
    </html>
  );
}
