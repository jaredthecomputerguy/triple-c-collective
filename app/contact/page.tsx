import { Metadata } from "next";
import { GoogleMapEmbed } from "./google-map-embed";
import { ContactForm } from "./contact-form";
import { FacebookIcon } from "@/app/_components/icons/facebook-icon";
import { InstagramIcon } from "@/app/_components/icons/instagram-icon";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function ContactPage() {
  // TODO: Add links to FB and Instagram
  return (
    <main className="max-w-4xl mx-auto sm:py-12 py-6 px-4 bg-[#fefefe]" id="main-content">
      <h1 className="text-4xl py-4 font-semibold">Contact us</h1>
      <hr className="pb-4" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="col-span-3 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">Hours of Operation</p>
              <p className="flex gap-1">
                <span className="font-semibold">Everyday:</span>10 AM - 9:30 PM
              </p>
              <p className="flex gap-1">
                <span className="font-semibold">Closed:</span>Thanksgiving & Christmas
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">Address</p>
              <div>
                <a
                  className="flex flex-col hover:underline text-sky-700 font-medium rounded outline-none focus:outline-primary-purple active:outline-primary-purple"
                  href="https://www.google.com/maps/place/14196+Lakeshore+Dr,+Clearlake,+CA+95422"
                  target="_blank">
                  <span>14196 Lakeshore Drive</span>
                  <span>Clearlake, CA 95422</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">Telephone</p>
              <a
                className="text-sky-700 hover:underline font-medium rounded outline-none focus:outline-primary-purple active:outline-primary-purple"
                href="tel:707-701-4160">
                (707) 701-4160
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">Email</p>
              <a
                className="text-sky-700 hover:underline font-medium rounded outline-none focus:outline-primary-purple active:outline-primary-purple"
                href="mailto:clearlakecompassioncenter@yahoo.com">
                clearlakecompassioncenter@yahoo.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">Socials</p>
              <ul className="flex gap-2 items-center">
                <li className="p-1">
                  <a
                    className="rounded outline-none focus:outline-primary-purple active:outline-primary-purple"
                    href="https://www.facebook.com/people/Triple-C-Collective-Clearlake-CA/100095379903282/"
                    target="_blank">
                    <FacebookIcon className="rounded w-8 h-8" />
                  </a>
                </li>
                <li className="p-1">
                  <a
                    className="rounded outline-none focus:outline-primary-purple active:outline-primary-purple"
                    href="https://www.instagram.com/_tripleccollective/"
                    target="_blank">
                    <InstagramIcon className="w-9 h-9" />
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
    </main>
  );
}
