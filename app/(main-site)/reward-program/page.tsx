import { type Metadata } from "next";
import Image from "next/image";
import rewardsPageImg from "@/public/images/rewards-program.avif";

export const metadata: Metadata = {
  title: "Reward Program | Triple C Collective",
  description:
    "Sign up for our rewards program and earn $0.02 for every dollar spent. Start saving today!",
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
    title: "Reward Program | Triple C Collective",
    url: `${process.env.SITE_URL}/reward-program`,
    description: "Lake County's Premier Cannabis Dispensary",
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reward Program | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/reward-program/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

export default function RewardsPage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-center font-logo text-4xl font-semibold md:text-5xl lg:text-6xl">
              Join our Rewards Program
            </h1>
            <p className="text-pretty text-center text-gray-600">
              Earn $0.02 for every dollar spent. Sign up today and start saving!{" "}
            </p>
          </div>
          <div className="max-w-[500px] basis-5/6 md:max-w-full">
            <Image
              className="rounded-xl"
              src={rewardsPageImg}
              alt="A quarter with the of a cannabis leaf shadow"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 py-8 md:grid-cols-3">
          <div className="mx-auto flex max-w-[500px] flex-col items-center gap-4 border-[1px] border-gray-300 px-4 py-6 md:max-w-none">
            <span className="font-logo text-xl">01</span>
            <h2 className="pt-6 font-logo text-2xl font-semibold xl:text-4xl">
              Sign Up
            </h2>
            <hr className="h-px w-full" />
            <p className="mb-8 text-balance py-2 text-center text-gray-800">
              Visit the store or place an order online to have an account
              created. You&apos;ll be automatically opted in to our rewards
              program.
            </p>
          </div>
          <div className="mx-auto flex max-w-[500px] flex-col items-center gap-4 border-[1px] border-gray-300 px-4 py-6 md:max-w-none">
            <span className="font-logo text-xl">02</span>
            <h3 className="pt-6 font-logo text-2xl font-semibold xl:text-4xl">
              Earn Points
            </h3>
            <hr className="h-px w-full" />
            <p className="mb-8 py-2 text-center text-gray-800">
              Earn points everytime you make a purchase. Track your points by
              asking your budtender or checking the bottom of your receipts.
            </p>
          </div>
          <div className="mx-auto flex max-w-[500px] flex-col items-center gap-4 border-[1px] border-gray-300 px-4 py-6 md:max-w-none">
            <span className="font-logo text-xl">03</span>
            <h4 className="pt-6 font-logo text-2xl font-semibold xl:text-4xl">
              Redeem Rewards
            </h4>
            <hr className="h-px w-full" />
            <p className="mb-8 py-2 text-center text-gray-800">
              Once you&apos;ve earned enough points, you can redeem them for
              discounts on your purchases. Let a budtender know that you&apos;d
              like to use your rewards when making a purchase, and we&apos;ll
              apply the discount to your total.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 py-16">
          <h5 className="text-center font-logo text-5xl font-semibold lg:text-6xl">
            Ready to get started?
          </h5>
          <a
            href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
            target="_blank"
            className="rounded bg-primary-purple px-6 py-2 text-xl text-[#fefefe] outline-none hover:bg-primary-purple/75 focus:bg-primary-purple/75 focus:outline-primary-purple lg:text-2xl"
          >
            Shop now
          </a>
        </div>
      </section>
    </main>
  );
}
