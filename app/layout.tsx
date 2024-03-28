import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Toaster } from "./_components/toaster";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California.",
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
  ],
  authors: [
    {
      name: "Jared Mercer",
      url: "https://jaredthecomputerguy.dev",
    },
  ],
  creator: "Jared Mercer",
  openGraph: {
    title: "Home | Triple C Collective",
    url: "https://triple-c-collective.vercel.app",
    description: "Lake County's Premier Cannabis Dispensary",
    images: "https://triple-c-collective.vercel.app/opengraph-image.png",
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: ["https://triple-c-collective.vercel.app/opengraph-image.png"],
  },
  metadataBase: new URL("https://triple-c-collective.vercel.app"),
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-logo",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} bg-primary-purple`}
      suppressHydrationWarning
    >
      <body className="relative">
        <NextTopLoader color="white" />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
