import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter Unsubscribe Success | Triple C Collective",
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
    title: "Newsletter Unsubscribe Success | Triple C Collective",
    url: `${process.env.SITE_URL}`,
    description: "Lake County's Premier Cannabis Dispensary",
    images: `${process.env.SITE_URL}/opengraph-image.png`,
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter Unsubscribe Success | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/opengraph-image.png`]
  },
  metadataBase: new URL(`${process.env.SITE_URL}`)
};

export default function NewsletterUnsubscribeSuccessPage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <h1 className="font-logo py-4 text-4xl font-semibold">
          You&apos;re Unsubscribed
        </h1>
        <hr />
        <p className="py-4">
          You won&apos;t receive any more emails from the Triple C Newsletter.
        </p>
        <p className="py-2">
          If this was a mistake, you can{" "}
          <Link className="text-blue-600 underline" href="/#newsletter">
            resubscribe here.
          </Link>
        </p>

        <p className="py-4">Thank you for supporting us!</p>
        <p>
          <Link className="text-blue-600 underline" href="/">
            Go to the home page.
          </Link>
        </p>
        <div className="mb-12 md:mb-48" />
      </div>
    </main>
  );
}
