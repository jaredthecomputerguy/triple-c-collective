import { Metadata } from "next";
import Image from "next/image";
import rewardsPageImg from "@/public/images/rewards-program.avif";

export const metadata: Metadata = {
  title: "Rewards Program | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function RewardsPage() {
  return (
    <main
      className="max-w-7xl mx-auto sm:py-12 py-6 px-4 bg-[#fefefe]"
      id="main-content"
    >
      <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold text-center md:text-5xl text-balance lg:text-6xl font-logo">
            Join our Rewards Program
          </h1>
          <p className="text-center text-gray-600 text-pretty">
            Earn $0.02 for every dollar spent. Sign up today and start saving!{" "}
          </p>
        </div>
        <div className="basis-5/6 max-w-[500px] md:max-w-full">
          <Image
            className="rounded-xl"
            src={rewardsPageImg}
            alt="A quarter with the shadow of a cannabis leaf"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 py-8 md:grid-cols-3">
        <div className="flex flex-col gap-4 items-center py-6 px-4 max-w-[500px] md:max-w-none mx-auto border-[1px] border-gray-300">
          <span className="text-xl font-logo">01</span>
          <h2 className="pt-6 text-2xl font-semibold font-logo xl:text-4xl">
            Sign Up
          </h2>
          <hr className="w-full h-px" />
          <p className="py-2 mb-8 text-center text-gray-800 text-balance">
            Visit the store or place an order online to have an account created.
            You&apos;ll be automatically opted in to our rewards program.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center py-6 px-4 max-w-[500px] md:max-w-none mx-auto border-[1px] border-gray-300">
          <span className="text-xl font-logo">02</span>
          <h3 className="pt-6 text-2xl font-semibold font-logo xl:text-4xl">
            Earn Points
          </h3>
          <hr className="w-full h-px" />
          <p className="py-2 mb-8 text-center text-gray-800">
            Earn points everytime you make a purchase. Track your points by
            asking your budtender or checking the bottom of your receipts.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center py-6 px-4 max-w-[500px] md:max-w-none mx-auto border-[1px] border-gray-300">
          <span className="text-xl font-logo">03</span>
          <h4 className="pt-6 text-2xl font-semibold font-logo xl:text-4xl">
            Redeem Rewards
          </h4>
          <hr className="w-full h-px" />
          <p className="py-2 mb-8 text-center text-gray-800">
            Once you&apos;ve earned enough points, you can redeem them for
            discounts on your purchases. Let a budtender know that you&apos;d
            like to use your rewards when making a purchase, and we&apos;ll
            apply the discount to your total.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-16">
        <h5 className="text-5xl font-semibold text-center lg:text-6xl font-logo">
          Ready to get started?
        </h5>
        <a
          href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
          target="_blank"
          className="bg-primary-purple text-[#fefefe] px-6 py-2 outline-none focus:outline-primary-purple focus:bg-primary-purple/75 hover:bg-primary-purple/75 rounded text-xl lg:text-2xl"
        >
          Shop now
        </a>
      </div>
    </main>
  );
}