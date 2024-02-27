import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { ReviewCard } from "../_components/review-card";
import { StoreIcon } from "../_components/icons/store";
import { StarRating } from "../_components/star-rating";

const BrandCarousel = dynamic(() =>
  import("../_components/brand-carousel").then((mod) => mod.BrandCarousel),
);

import reviews from "@/lib/data/reviews.json";

import headerImg from "@/public/images/store-interior-placeholder.jpg";
import logoImg from "@/public/images/logo.png";
import orderOnlineImg from "@/public/images/order-online.avif";
import phonecallImg from "@/public/images/phonecall.avif";
import rewardsImg from "@/public/images/rewards.avif";

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
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
            <Link
              className="mt-4 w-fit grow-0 rounded bg-primary-purple px-6 py-2 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple active:bg-primary-purple/80 active:outline-primary-purple disabled:bg-primary-purple/50 md:text-xl"
              href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
              target="_blank"
            >
              Shop Now
            </Link>
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
              className="mt-4 w-fit grow-0 rounded bg-primary-purple px-6 py-2 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple active:bg-primary-purple/80 active:outline-primary-purple disabled:bg-primary-purple/50 md:text-xl"
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
              className="mt-4 w-fit grow-0 rounded bg-primary-purple px-6 py-2 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple active:bg-primary-purple/80 active:outline-primary-purple disabled:bg-primary-purple/50 md:text-xl"
              href="/rewards"
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
      </div>
    </main>
  );
}
