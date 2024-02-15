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
    <main className="max-w-7xl mx-auto sm:py-12 py-6 px-4 bg-[#fefefe]" id="main-content">
      <div className="flex flex-col gap-8 items-center md:flex-row-reverse">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl text-balance lg:text-6xl font-semibold text-center font-logo">
            Join our Rewards Program
          </h1>
          <p className="text-gray-600 text-center text-pretty">
            Earn $0.02 for every dollar spent. Sign up today and start saving!{" "}
          </p>
        </div>
        <div className="basis-5/6 max-w-[500px] md:max-w-full">
          <Image className="rounded-xl" src={rewardsPageImg} alt="A quarter with the shadow of a cannabis leaf" />
        </div>
      </div>
    </main>
  );
}
