import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import reviews from "@/lib/data/reviews.json";
import { ReviewCard } from "../_components/review-card";
import { StoreIcon } from "../_components/icons/store";
import { StarRating } from "../_components/star-rating";
import { BrandCarousel } from "../_components/brand-carousel";
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
          className="w-full h-96 md:h-[600px] object-cover"
          src={headerImg}
          alt="Triple C Collective Storefront"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        <h1 className="absolute px-4 text-4xl font-semibold text-center text-white md:text-6xl font-logo text-shadow">
          Welcome to Triple C Collective
        </h1>
      </div>

      <div className="radial-gradient text-[#fefefe]">
        <div className="flex flex-col gap-8 px-4 py-20 mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-center uppercase text-shadow md:text-4xl font-logo">
            Lake County&apos;s <span className="gold">Premier</span> Cannabis
            Dispensary
          </h2>
          <div className="flex items-center max-w-2xl mx-auto">
            <div className="h-px bg-white w-36 md:w-60" />
            <Image
              src={logoImg}
              className="w-24 mx-auto rounded-lg md:w-48"
              alt="Storefront"
            />
            <div className="h-px bg-white w-36 md:w-60" />
          </div>
          <p className="mx-auto text-xl prose text-center text-white font-logo text-balanced">
            Located in the heart of Lake County, California, we offer a diverse
            selection of high-quality cannabis products, expert guidance, and a
            welcoming environment for cannabis enthusiasts.
          </p>
        </div>
      </div>

      <div className="py-20 mx-auto bg-gray-200">
        <div className="flex flex-col justify-center gap-8 px-4 mx-auto max-w-7xl md:flex-row lg:gap-16">
          <div className="flex flex-col gap-4">
            <Image
              src={orderOnlineImg}
              className="rounded-lg"
              alt="Online Ordering"
            />
            <p className="text-2xl font-semibold text-primary-purple font-logo">
              Online Ordering
            </p>
            <p>
              Look through our online menu and place an order for pickup or
              delivery.
            </p>
            <Link
              className="px-6 py-2 mt-4 font-semibold text-white transition-all rounded outline-none w-fit grow-0 bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50"
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
            <p className="text-2xl font-semibold text-primary-purple font-logo">
              Order by Phone
            </p>
            <p>
              Talk to our talented budtenders and place your order for curbside
              or in store pickup.
            </p>
            <Link
              className="px-6 py-2 mt-4 font-semibold text-white transition-all rounded outline-none w-fit grow-0 bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50"
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
            <p className="text-2xl font-semibold text-primary-purple font-logo">
              Rewards Program
            </p>
            <p>
              Earn points with every purchase you make, and redeem them at any
              time.
            </p>
            <Link
              className="px-6 py-2 mt-4 font-semibold text-white transition-all rounded outline-none w-fit grow-0 bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50"
              href="/rewards"
            >
              Explore Rewards
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl pt-20 mx-auto">
        <h3 className="pb-8 text-4xl font-semibold text-center font-logo">
          Featured Brands
        </h3>
        <hr className="pb-4" />
        <div className="flex items-center justify-center">
          <BrandCarousel />
        </div>
      </div>

      <div className="max-w-4xl py-12 mx-auto">
        <h4 className="py-8 text-4xl font-semibold text-center font-logo text-pretty">
          What Our Customers Are Saying...
        </h4>
        <hr />
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="flex items-center justify-center gap-4 pt-12">
            <StoreIcon className="w-12 h-12 stroke-primary-purple" />
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
        <div className="grid gap-4 px-2 md:grid-cols-3 py-14">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </main>
  );
}