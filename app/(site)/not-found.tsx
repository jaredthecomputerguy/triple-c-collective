import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function NotFound() {
  return (
    <>
      <div className="max-w-4xl mx-auto sm:pt-12 pt-6 px-2 h-[calc(100vh-300px)]">
        <h1 className="text-4xl py-4 font-semibold">Page not found</h1>
        <hr className="pb-4" />
        <div className="flex flex-col gap-4">
          <p>The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            className="px-6 py-2 w-fit font-semibold text-white transition-all rounded outline-none bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50"
            href="/"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
