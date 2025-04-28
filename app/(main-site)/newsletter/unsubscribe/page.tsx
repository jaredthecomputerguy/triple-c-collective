import { notFound } from "next/navigation";
import { Resend } from "resend";
import { UnsubscribeForm } from "./unsubscribe-form";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Newsletter Unsubscribe | Triple C Collective",
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
    title: "Newsletter Unsubscribe | Triple C Collective",
    url: `${process.env.SITE_URL}`,
    description: "Lake County's Premier Cannabis Dispensary",
    images: `${process.env.SITE_URL}/opengraph-image.png`,
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter Unsubscribe | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function NewsletterUnsubscribePage(props: {
  searchParams: Promise<{ contactId: string }>;
}) {
  const searchParams = await props.searchParams;
  const { contactId } = searchParams;

  if (!contactId) {
    return notFound();
  }

  const { data } = await resend.contacts.get({
    id: contactId,
    audienceId: process.env.RESEND_GENERAL_AUDIENCE_ID,
  });

  if (!data) {
    return notFound();
  }

  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <h1 className="font-logo py-4 text-4xl font-semibold">
          Are you sure you want to go?{" "}
        </h1>
        <hr />
        <UnsubscribeForm contactId={contactId} />
      </div>
    </main>
  );
}
