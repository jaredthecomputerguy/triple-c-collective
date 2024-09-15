import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ReviewCard } from "@/app/_components/review-card";
import { StoreIcon } from "@/app/_components/icons/store";
import { StarRating } from "@/app/_components/star-rating";

import reviews from "@/lib/data/reviews.json";

import headerImg from "@/public/images/interior-shop.jpg";
import logoImg from "@/public/images/logo.png";
import orderOnlineImg from "@/public/images/order-online.avif";
import phonecallImg from "@/public/images/phonecall.avif";
import rewardsImg from "@/public/images/rewards.avif";
import dccLogoImg from "@/public/images/dcc-logo.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/accordian";
import { Button } from "../_components/button";
import { ShopNowButton } from "../_components/shop-now-button";
import { BrandCarousel } from "../_components/brand-carousel";

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
    url: `${process.env.SITE_URL}`,
    description: "Lake County's Premier Cannabis Dispensary",
    images: `${process.env.SITE_URL}/opengraph-image.png`,
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

export default function HomePage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="relative flex flex-col items-center justify-center">
        <Image
          className="h-96 w-full object-cover md:h-[600px]"
          src={headerImg}
          alt="Triple C Collective Storefront"
          priority
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/50" />

        <h1 className="text-shadow absolute px-4 text-center font-logo text-4xl font-semibold text-white md:text-6xl">
          Welcome to Triple C Collective
        </h1>
      </div>

      <div className="radial-gradient text-[#fefefe]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20">
          <h2 className="text-shadow text-center font-logo text-3xl font-semibold uppercase md:text-4xl">
            Lake County&apos;s <span className="gold">Premier</span> Cannabis
            Dispensary
          </h2>
          <div className="mx-auto flex max-w-2xl items-center">
            <div className="h-px w-36 bg-white md:w-60" />
            <Image
              src={logoImg}
              className="mx-auto w-24 rounded-lg md:w-48"
              alt="Storefront"
            />
            <div className="h-px w-36 bg-white md:w-60" />
          </div>
          <p className="text-balanced prose mx-auto text-center font-logo text-xl text-white">
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
            <p className="font-logo text-2xl font-semibold text-primary-purple">
              Online Ordering
            </p>
            <p>
              Look through our online menu and place an order for pickup or
              delivery.
            </p>
            <ShopNowButton />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={phonecallImg}
              className="rounded-lg"
              alt="Online Ordering"
            />
            <p className="font-logo text-2xl font-semibold text-primary-purple">
              Order by Phone
            </p>
            <p>
              Talk to our talented budtenders and place your order for curbside
              or in store pickup.
            </p>
            <Link
              className="mt-4 w-fit grow-0 rounded bg-primary-purple px-6 py-2 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 md:text-xl"
              href="tel:707-701-4160"
            >
              Call Us
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={rewardsImg}
              className="rounded-lg"
              alt="Online Ordering"
            />
            <p className="font-logo text-2xl font-semibold text-primary-purple">
              Rewards Program
            </p>
            <p>
              Earn points with every purchase you make, and redeem them at any
              time.
            </p>
            <Link
              className="mt-4 w-fit grow-0 rounded bg-primary-purple px-6 py-2 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 md:text-xl"
              href="/reward-program"
            >
              Explore Rewards
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl pt-20">
        <h3 className="pb-8 text-center font-logo text-4xl font-semibold">
          Featured Brands
        </h3>
        <hr className="pb-4" />
        <div className="flex items-center justify-center">
          <BrandCarousel />
        </div>
      </div>

      <div className="mx-auto max-w-4xl py-12">
        <h4 className="text-pretty py-8 text-center font-logo text-4xl font-semibold">
          What Our Customers Are Saying...
        </h4>
        <hr />
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="flex items-center justify-center gap-4 pt-12">
            <StoreIcon className="h-12 w-12 stroke-primary-purple" />
            <span className="text-3xl font-semibold text-primary-purple">
              Triple C Collective
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-semibold text-primary-purple">
              4.4
            </span>
            <StarRating rating="4.4" className="max-w-40 sm:max-w-48" />
            <span className="text-sm text-gray-600">(494 reviews)</span>
          </div>
        </div>
        <div className="grid gap-4 px-2 py-14 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="pb-6">
            <h5 className="text-center font-logo text-4xl font-semibold">
              Real CA Cannabis
            </h5>
            <p className="pt-1 text-center text-xl font-bold tracking-tighter text-gray-700">
              Recognized by the State of California
            </p>
          </div>
          <hr />
          <div className="container mx-auto px-4 pt-6 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <p className="text-muted-foreground max-w-[900px] font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Real CA Cannabis program is an official initiative of the
                  California Department of Cannabis Control. We&apos;re proud to
                  work with them to help you shop safely and responsibly.
                </p>
              </div>
              <div className="flex flex-col">
                <Image src={dccLogoImg} width={280} alt="DCC Logo" />
                <Button
                  variant="outline"
                  className="mx-auto my-2 w-fit border-black/50 hover:border-black hover:shadow"
                  asChild
                >
                  <Link href="/real-ca-cannabis">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-10">
          <h5 className="py-8 text-center font-logo text-4xl font-semibold">
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
                      className="font-semibold text-primary-purple hover:underline"
                    >
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
                  We accept cash and debit cards for in-store purchases. Online
                  orders can be paid for securely with debit.
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
