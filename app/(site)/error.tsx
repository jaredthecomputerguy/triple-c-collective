"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Error: ", error);
  }, [error]);

  return (
    <div className="max-w-4xl mx-auto sm:pt-12 pt-6 px-2 h-[calc(100vh-300px)]">
      <h1 className="text-4xl py-4 font-semibold">Something went wrong...</h1>
      <button
        className="px-6 py-2 w-fit font-semibold text-white transition-all rounded outline-none bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50"
        onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
