import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { ReviewCards } from "@/app/_components/review-card";
import { StoreIcon } from "@/app/_components/icons/store";
import { StarRating } from "@/app/_components/star-rating";

import headerImg from "@/public/images/interior-shop.jpg";
import christmasHeaderImg from "@/public/images/interior-shop.jpg";
import halloweenHeaderImg from "@/public/images/halloween-store.png";
import logoImg from "@/public/images/logo.png";
import halloweenLogoImg from "@/public/images/logo-halloween.png";
import thanksgivingLogoImg from "@/public/images/thanksgiving/logo.png";
import christmasLogoImg from "@/public/images/christmas/logo.gif";
import newYearsLogoImg from "@/public/images/new-years/logo.gif";
import orderOnlineImg from "@/public/images/order-online.webp";
import phonecallImg from "@/public/images/phonecall.webp";
import deliveryImg from "@/public/images/delivery.webp";
import dccLogoImg from "@/public/images/dcc-logo.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/app/_components/accordian";
import { Button } from "@/app/_components/button";
import { BrandCarousel } from "@/app/_components/brand-carousel";

enum Months {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11
}

const getHeaderAndLogoImages = (): {
  logo: StaticImageData;
  header: StaticImageData;
} => {
  const today = new Date();
  const month: number = today.getMonth();
  const day = today.getDate();
  let images: { logo: StaticImageData; header: StaticImageData } = {
    header: headerImg,
    logo: logoImg
  };
  switch (month) {
    case Months.October:
      images = {
        logo: halloweenLogoImg,
        header: halloweenHeaderImg
      };
      break;
    case Months.November:
      images = {
        logo: thanksgivingLogoImg,
        // TODO: Add Thanksgiving header image
        header: headerImg
      };
      break;
    case Months.December:
      if (day > 25) {
        images = {
          logo: newYearsLogoImg,
          header: christmasHeaderImg
        };
      } else {
        images = {
          logo: christmasLogoImg ?? logoImg,
          header: christmasHeaderImg
        };
      }
      break;
    default:
      images = {
        logo: logoImg,
        header: headerImg
      };
      break;
  }

  return images;
};

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
  metadataBase: new URL(`${process.env.SITE_URL}`)
};

export default function HomePage() {
  const { logo, header } = getHeaderAndLogoImages();

  const shouldOptimize = logo.src.endsWith(".gif") || logo.src.endsWith(".svg");

  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="relative flex flex-col items-center justify-center">
        <Image
          className="h-96 w-full object-cover md:h-[600px]"
          src={header} //headerImg}
          alt="Triple C Collective Storefront"
          priority
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black/50" />

        <h1 className="text-shadow font-logo absolute px-4 text-center text-4xl font-semibold text-white md:text-6xl">
          Welcome to Triple C Collective
        </h1>
      </div>

      <div className="radial-gradient text-[#fefefe]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20">
          <h2 className="text-shadow font-logo text-center text-3xl font-semibold uppercase md:text-4xl">
            Lake County&apos;s <span className="gold">Premier</span> Cannabis
            Dispensary
          </h2>
          <div className="mx-auto flex max-w-2xl items-center">
            <div className="h-px w-36 bg-white md:w-60" />
            <Image
              src={logo}
              unoptimized={shouldOptimize}
              className="mx-auto w-24 rounded-lg md:w-48"
              alt="Triple C Collective Logo"
            />
            <div className="h-px w-36 bg-white md:w-60" />
          </div>
          <p className="text-balanced prose font-logo mx-auto text-center text-xl text-white">
            Located in the heart of Lake County, California, we offer a diverse
            selection of high-quality cannabis products, expert guidance, and a
            welcoming environment for cannabis enthusiasts.
          </p>
        </div>
      </div>

      <div className="mx-auto bg-gray-200 py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-8 px-4 md:flex-row lg:gap-16">
          <div className="flex flex-col gap-4">
            <Image
              src={orderOnlineImg}
              className="rounded-lg"
              alt="Online Ordering"
            />
            <p className="font-logo text-primary-purple text-2xl font-semibold">
              Order Online
            </p>
            <p>
              Look through our online menu and place an order for pickup or
              delivery.
            </p>

            <Link
              className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 mt-4 flex w-full min-w-[220px] grow-0 items-center justify-center rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
              href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
              target="_blank">
              Shop Now
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src={phonecallImg}
              className="rounded-lg"
              alt="Order by Phone"
            />
            <p className="font-logo text-primary-purple text-2xl font-semibold">
              Order by Phone
            </p>
            <p>
              Talk to our talented budtenders and place your order for curbside
              or in store pickup.
            </p>
            <Link
              className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 mt-4 flex w-full min-w-[220px] grow-0 justify-center rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
              href="tel:707-701-4160">
              Call Us
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src={deliveryImg}
              className="rounded-lg"
              alt="Cannabis Delivery"
            />
            <p className="font-logo text-primary-purple text-2xl font-semibold">
              Order Delivery
            </p>
            <p>
              Get your favorite cannabis products delivered straight to your
              doorstep.
            </p>
            <Link
              className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 mt-4 flex w-full min-w-[220px] grow-0 justify-center rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
              href="/delivery">
              Schedule Delivery
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl pt-20">
        <h3 className="font-logo pb-8 text-center text-4xl font-semibold">
          Featured Brands
        </h3>
        <hr className="pb-4" />
        <div className="flex items-center justify-center">
          <BrandCarousel />
        </div>
      </div>

      <div className="mx-auto max-w-4xl py-12">
        <h4 className="font-logo py-8 text-center text-4xl font-semibold text-pretty">
          What Our Customers Are Saying...
        </h4>
        <hr />
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="flex items-center justify-center gap-4 pt-12">
            <StoreIcon className="stroke-primary-purple h-12 w-12" />
            <span className="text-primary-purple text-3xl font-semibold">
              Triple C Collective
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-purple text-4xl font-semibold">
              4.4
            </span>
            <StarRating rating="4.4" className="max-w-40 sm:max-w-48" />
            <span className="text-sm text-gray-600">(494 reviews)</span>
          </div>
        </div>
        <ReviewCards />
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="pb-6">
            <h5 className="font-logo text-center text-4xl font-semibold">
              Real CA Cannabis
            </h5>
            <p className="pt-1 text-center text-xl font-bold tracking-tighter text-gray-700">
              Recognized by the State of California
            </p>
          </div>
          <hr />
          <div className="container mx-auto px-4 pt-6 md:px-6">
            {" "}
            {/* id="newsletter"> */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <p className="text-muted-foreground max-w-[900px] font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Real CA Cannabis program is an official initiative of the
                  California Department of Cannabis Control. We&apos;re proud to
                  work with them to help you shop safely and responsibly.
                </p>
              </div>
              <div className="flex flex-col">
                <Image
                  src={dccLogoImg}
                  width={280}
                  alt="California's Department of Cannabis Control Logo"
                />
                <Button
                  variant="outline"
                  className="mx-auto my-2 w-fit border-black/50 hover:border-black hover:shadow-sm"
                  asChild>
                  <Link
                    className="mt-4"
                    href="/real-ca-cannabis"
                    aria-label="Learn more about the Real CA Cannabis program">
                    Learn More About Real CA Cannabis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl py-12">
        <div className="px-4 pb-10">
          <h5 className="font-logo py-8 text-center text-4xl font-semibold">
            Frequently Asked Questions
          </h5>
          <hr className="pb-4" />
          <div className="px-4">
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Is cannabis legal in California?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, cannabis is legal for both medical and recreational use
                  in California. Triple C Collective operates in full compliance
                  with all state and local regulations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What types of products do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  At Triple C Collective, we offer a wide range of cannabis
                  products, including flower, concentrates, edibles, topicals,
                  and more. We also carry Kratom and select CBD products.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do I know which product is right for me?
                </AccordionTrigger>
                <AccordionContent>
                  Choosing the right cannabis product depends on various
                  factors, including your experience level, desired effects, and
                  preferences. Our knowledgeable staff is here to assist you in
                  finding the perfect product tailored to your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I purchase cannabis online?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! We offer convenient online ordering for pickup or
                  delivery. Browse our extensive selection, place your order,
                  and relax while we take care of the rest.{" "}
                  <p className="my-2 text-lg">
                    <Link
                      href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
                      target="_blank"
                      className="text-primary-purple font-semibold hover:underline">
                      Start shopping
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can I get my order delivered?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer delivery services to select areas twice a day if
                  we have a driver available.
                  <p className="my-2">Our delivery times are 12pm and 5pm.</p>
                  <p className="my-2">
                    There is a delivery fee depending on your location which you
                    can view below.
                  </p>
                  <table className="w-full max-w-2xl table-auto px-4">
                    <thead className="text-left">
                      <tr className="bg-primary-purple text-white">
                        <th className="p-2">Location</th>
                        <th className="p-2 text-center">Delivery Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2">Clearlake & Lower Lake</td>
                        <td className="text-center">$10</td>
                      </tr>
                      <tr>
                        <td className="p-2">Clearlake Oaks & Twin Lakes</td>
                        <td className="text-center">$12</td>
                      </tr>
                      <tr>
                        <td className="p-2">Hidden Valley & Glenhaven</td>
                        <td className="text-center">$25</td>
                      </tr>
                      <tr>
                        <td className="p-2">
                          Cobb, Kelseyville, Middletown, Lucerne, & Spring
                          Valley
                        </td>
                        <td className="text-center">$30</td>
                      </tr>
                      <tr>
                        <td className="p-2">Lakeport & Upper Lake</td>
                        <td className="text-center">$35</td>
                      </tr>
                    </tbody>
                  </table>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept cash, debit cards, tap to pay, and credit cards for
                  in-store purchases. Online orders can be paid for securely
                  with debit over ACH.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Is there a minimum age requirement to purchase cannabis?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you must be at least 21 years old, or 18 years old with
                  valid medical identification, to purchase cannabis products in
                  California. We require a valid ID for all transactions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  Are your products tested for quality and safety?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. All products available undergo rigorous testing by
                  accredited laboratories to ensure they meet the mandated state
                  safety and quality standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
