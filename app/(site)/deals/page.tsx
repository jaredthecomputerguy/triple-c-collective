import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deals | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function DealsPage() {
  return (
    <div className="max-w-4xl mx-auto sm:py-12 py-6 px-4 bg-[#fefefe]">
      <h1 className="text-4xl py-4 font-semibold">Deals</h1>
      <hr className="pb-4" />
      <div className="h-96 py-4">
        <iframe
          title="Illa Guerrilla Trap Takeover Countdown Clock"
          src="https://illaguerrilla.com/iframe-triple-c/"
          loading="eager"
          width="100%"
          height="110%"
          className="outline-none rounded-xl"
        />
      </div>
    </div>
  );
}
