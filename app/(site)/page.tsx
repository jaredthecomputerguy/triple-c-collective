import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function HomePage() {
  return (
    <div className="bg-[#fefefe]">
      <div className="flex flex-col items-center relative justify-center">
        <img
          className="w-full h-96 md:h-[600px] object-cover"
          src="/images/store-interior-placeholder.jpg"
          alt="Triple C Collective Storefront"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        <span className="absolute text-4xl md:text-6xl text-center font-semibold text-white px-4 font-logo text-shadow">
          Welcome to Triple C Collective
        </span>
      </div>
    </div>
  );
}
