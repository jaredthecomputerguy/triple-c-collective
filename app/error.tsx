"use client";

import { useEffect } from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { usePathname } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(`Error on page ${pathname}: ${error}`);
  }, [error, pathname]);

  return (
    <div className="flex min-h-screen w-screen flex-col justify-between bg-white">
      <Header />
      <section className="mx-auto mb-64 flex max-w-4xl flex-col items-center justify-center gap-12 px-2 pt-6 sm:pt-12">
        <h1 className="py-4 text-center text-4xl font-semibold">
          Something went wrong
        </h1>
        <button
          className="w-fit rounded bg-primary-purple px-6 py-2 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple active:bg-primary-purple/80 active:outline-primary-purple disabled:bg-primary-purple/50 md:text-xl"
          onClick={() => reset()}
        >
          Reload Page
        </button>
      </section>
      <Footer />
    </div>
  );
}
