import { type Metadata } from "next";
import { GoogleMapEmbed } from "./google-map-embed";
import { ContactForm } from "./contact-form";
import { FacebookIcon } from "@/app/_components/icons/facebook-icon";
import { InstagramIcon } from "@/app/_components/icons/instagram-icon";

export const metadata: Metadata = {
  title: "Contact Us | Triple C Collective",
  description:
    "If you have any questions or concerns, feel free to reach out to us. We are here to help you with all your cannabis needs.",
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
    title: "Contact Us | Triple C Collective",
    url: `${process.env.SITE_URL}`,
    description: "Lake County's Premier Cannabis Dispensary",
    images: `${process.env.SITE_URL}/opengraph-image.png`,
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

export default function ContactPage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:py-12">
        <h1 className="py-4 font-logo text-4xl font-semibold">Contact us</h1>
        <hr className="pb-4" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="col-span-3 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Hours of Operation</p>
                <p className="flex gap-1">
                  <span className="font-semibold">Everyday:</span>10 AM - 9:30
                  PM
                </p>
                <p className="flex gap-1">
                  <span className="font-semibold">Closed:</span>Thanksgiving &
                  Christmas Day
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Address</p>
                <div>
                  <a
                    className="flex flex-col rounded font-medium text-sky-700 outline-none hover:underline focus:outline-primary-purple"
                    href="https://www.google.com/maps/place/14196+Lakeshore+Dr,+Clearlake,+CA+95422"
                    target="_blank"
                  >
                    <span>14196 Lakeshore Drive</span>
                    <span>Clearlake, CA 95422</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Telephone</p>
                <a
                  className="rounded font-medium text-sky-700 outline-none hover:underline focus:outline-primary-purple"
                  href="tel:707-701-4160"
                >
                  (707) 701-4160
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Email</p>
                <a
                  className="rounded font-medium text-sky-700 outline-none hover:underline focus:outline-primary-purple"
                  href="mailto:clearlakecompassioncenter@yahoo.com"
                >
                  clearlakecompassioncenter@yahoo.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Socials</p>
                <ul className="flex items-center gap-2">
                  <li className="rounded p-1 transition-colors hover:bg-primary-purple/10">
                    <a
                      className="rounded outline-none focus:outline-primary-purple"
                      href="https://www.facebook.com/people/Triple-C-Collective-Clearlake-CA/100095379903282/"
                      target="_blank"
                      aria-label="Follow us on Facebook"
                    >
                      <FacebookIcon className="h-8 w-8 rounded" />
                    </a>
                  </li>
                  <li className="rounded p-1 transition-colors hover:bg-primary-purple/10">
                    <a
                      className="rounded outline-none focus:outline-primary-purple"
                      href="https://www.instagram.com/_tripleccollective/"
                      target="_blank"
                      aria-label="Follow us on Instagram"
                    >
                      <InstagramIcon className="h-9 w-9" />
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
              <div>
                <p className="text-xl font-semibold">Send us a message</p>
                <ContactForm />
              </div>
            </div>
          </div>
          <GoogleMapEmbed />
        </div>
      </section>
    </main>
  );
}
