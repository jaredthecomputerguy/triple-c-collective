import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import reviews from "@/lib/data/reviews.json";
import { ReviewCard } from "./_components/review-card";
import { StoreIcon } from "./_components/icons/store";
import { StarRating } from "./_components/star-rating";
import { BrandCarousel } from "./brand-carousel";

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function HomePage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="relative flex flex-col items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-96 md:h-[600px] object-cover"
          src="/images/store-interior-placeholder.jpg"
          alt="Triple C Collective Storefront"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        <h1 className="absolute px-4 text-4xl font-semibold text-center text-white md:text-6xl font-logo text-shadow">
          Welcome to Triple C Collective
        </h1>
      </div>

      <div className="radial-gradient text-[#fefefe]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8 py-20">
          <h2 className="text-3xl font-semibold text-shadow text-center md:text-4xl uppercase font-logo">
            Lake County&apos;s <span className="gold">Premier</span> Cannabis Dispensary
          </h2>
          <div className="max-w-2xl flex items-center mx-auto">
            <div className="bg-white h-px w-36 md:w-60" />
            <Image
              src="/images/logo.png"
              width={200}
              height={200}
              className="rounded-lg mx-auto w-24 md:w-48"
              alt="Storefront"
            />
            <div className="bg-white h-px w-36 md:w-60" />
          </div>
          <p className="font-logo text-balanced text-center mx-auto prose text-white text-xl">
            Located in the heart of Lake County, California, we offer a diverse selection of high-quality cannabis
            products, expert guidance, and a welcoming environment for cannabis enthusiasts.
          </p>
        </div>
      </div>

      <div className="mx-auto bg-gray-200 py-20">
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row gap-8 lg:gap-16 justify-center px-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/order-online.avif"
              className="rounded-lg"
              alt="Online Ordering"
              width={800}
              height={800}
            />
            <p className="text-2xl text-primary-purple font-semibold font-logo">Online Ordering</p>
            <p>Look through our online menu and place an order for pickup or delivery.</p>
            <Link
              className="mt-4 px-6 py-2 font-semibold text-white transition-all rounded outline-none w-fit grow-0 bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50"
              href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
              target="_blank">
              Shop Now
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Image src="/images/phonecall.avif" className="rounded-lg" alt="Online Ordering" width={800} height={800} />
            <p className="text-2xl text-primary-purple font-semibold font-logo">Order by Phone</p>
            <p>Talk to our talented budtenders and place your order for curbside or in store pickup.</p>
            <Link
              className="mt-4 px-6 py-2 font-semibold text-white transition-all rounded outline-none w-fit grow-0 bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50"
              href="tel:707-701-4160">
              Call Us
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Image src="/images/rewards.avif" className="rounded-lg" alt="Online Ordering" width={800} height={800} />
            <p className="text-2xl text-primary-purple font-semibold font-logo">Rewards Program</p>
            <p>Earn points with every purchase you make, and redeem them at any time.</p>
            <Link
              className="mt-4 px-6 py-2 font-semibold text-white transition-all rounded outline-none w-fit grow-0 bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50"
              href="/rewards">
              Explore Rewards
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl pt-20 mx-auto">
        <h3 className="text-4xl font-logo text-center pb-8 font-semibold">Featured Brands</h3>
        <hr className="pb-4" />
        <div className="flex items-center justify-center">
          <BrandCarousel />
        </div>
      </div>

      <div className="py-12 max-w-4xl mx-auto">
        <h4 className="text-4xl py-8 text-center font-logo font-semibold text-pretty">
          What Our Customers Are Saying...
        </h4>
        <hr />
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="flex items-center gap-4 justify-center pt-12">
            <StoreIcon className="stroke-primary-purple w-12 h-12" />
            <span className="text-primary-purple font-semibold text-3xl">Triple C Collective</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-primary-purple font-semibold text-4xl">4.4</span>
            <StarRating rating="4.4" className="max-w-40 sm:max-w-48" />
            <span className="text-gray-600 text-sm">(494 reviews)</span>
          </div>
        </div>
        <div className="grid gap-4 px-2 md:grid-cols-3 py-14">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </main>
  );
}
