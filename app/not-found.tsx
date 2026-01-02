import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/app/_components/footer";

export const metadata: Metadata = {
  title: "Not Found | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 16 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence."
};

export default function NotFound() {
  return (
    <div className="flex w-screen flex-col justify-between bg-white">
      <section className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-2 pt-6 sm:pt-12 mb-96">
        <h1 className="py-4 text-center text-4xl font-semibold">
          404 | Page Not Found
        </h1>
        <div className="flex flex-col gap-4 text-center">
          <p>The page you are looking for does not exist.</p>
          <p>
            Return to the{" "}
            <Link
              className="text-primary-purple font-semibold hover:underline"
              href="/">
              Home Page
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
