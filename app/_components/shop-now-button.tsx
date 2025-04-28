"use client";
import Link from "next/link";
import { track } from "@vercel/analytics";

export const ShopNowButton = () => {
  return (
    <Link
      className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 mt-4 w-fit grow-0 rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
      href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
      target="_blank"
      onClick={() => {
        track("Shop Now Button Clicked", {
          time: new Date().toString(),
          userAgent: navigator.userAgent,
          language: navigator.language,
        });
      }}
    >
      Shop Now
    </Link>
  );
};
