import { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "../_components/header";
import { AgeModal } from "../_components/age-modal";
import { Footer } from "../_components/footer";

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function MainSiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-2 top-2 z-50 rounded border-white bg-primary-purple p-1 text-sm text-white opacity-0 outline-none transition-opacity focus:opacity-100 focus:outline-white active:outline-white"
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
