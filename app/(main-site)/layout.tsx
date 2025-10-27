import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Header } from "@/app/_components/header";
import { AgeModal } from "@/app/_components/age-modal";
import { Footer } from "@/app/_components/footer";

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 16 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence."
};

export default function MainSiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="bg-primary-purple absolute top-2 left-2 z-50 rounded-sm border-white p-1 text-sm text-white opacity-0 outline-hidden transition-opacity focus:opacity-100 focus:outline-white"
      >
        Skip to main content
      </a>
      <Header />
      <AgeModal />
      {children}
      <Footer />
    </>
  );
}
