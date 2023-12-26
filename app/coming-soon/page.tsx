import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coming Soon | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen py-12 bg-cover bg-main">
      <header className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
        <Image src="/logo.webp" alt="" width={80} height={80} quality={100} />
        <h1 className="text-4xl font-extrabold tracking-wider uppercase font-logo text-primary-purple">
          Triple C Collective
        </h1>
      </header>
      <section className="px-4 sm:px-6 py-6 text-white">
        <h2 className="text-4xl sm:text-5xl text-center">Coming soon</h2>
      </section>
      <footer className="p-2 mx-24 text-sm font-medium text-center text-white rounded-lg sm:p-4 bg-primary-purple/75">
        In development by{" "}
        <a
          className="underline text-cyan-600"
          href="https://www.github.com/jaredthecomputerguy"
          target="_blank"
        >
          Jared Mercer
        </a>
      </footer>
    </main>
  );
}
