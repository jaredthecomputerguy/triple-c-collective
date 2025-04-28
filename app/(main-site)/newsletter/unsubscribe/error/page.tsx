import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter Unsubscribe Error | Triple C Collective",
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
    title: "Newsletter Unsubscribe Error | Triple C Collective",
    url: `${process.env.SITE_URL}`,
    description: "Lake County's Premier Cannabis Dispensary",
    images: `${process.env.SITE_URL}/opengraph-image.png`,
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter Unsubscribe Error | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

export default async function NewsletterUnsubscribeSuccessPage(props: {
  searchParams: Promise<{ contactId: string }>;
}) {
  const searchParams = await props.searchParams;
  const { contactId } = searchParams;

  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <h1 className="font-logo py-4 text-4xl font-semibold">
          Something went wrong
        </h1>
        <hr />
        <p className="py-4">
          There was an issue unsubscribing you from the newsletter.
        </p>
        <p className="py-2">
          Please try to unsubscribe again
          <Link
            className="text-blue-600 underline"
            href={`/newsletter/unsubscribe?contactId=${contactId}`}
          >
            {" "}
            here.
          </Link>
        </p>
        <p className="py-4">
          If you&apos;re still seeing this page, reach out to us directly at{" "}
          <Link
            className="text-blue-600 underline"
            href="mailto:clearlakecompassioncenter@yahoo.com"
          >
            clearlakecompassioncenter@yahoo.com
          </Link>{" "}
          and we&apos;ll manually delete your email from the list.
        </p>{" "}
        <p className="pb-2">Sorry for the inconvenience.</p>
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
