import { Metadata } from "next";
import reviews from "./reviews.json";
import { ReviewCard } from "../_components/review-card";

// import { ProductCarousel } from "./product-carousel";
// import placeholderProducts from "./placeholder-products.json";
// export type Product = (typeof placeholderProducts)[number];

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function HomePage() {
  return (
    <div className="bg-[#fefefe]">
      <div className="relative flex flex-col items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-96 md:h-[600px] object-cover"
          src="/images/store-interior-placeholder.jpg"
          alt="Triple C Collective Storefront"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        <h1 className="absolute px-4 text-4xl font-semibold text-center text-white md:text-6xl font-logo text-shadow">
          Welcome to Triple C Collective
        </h1>
      </div>
      {/* TODO: Try to make product carousel work */}
      {/* <ProductCarousel products={placeholderProducts} /> */}
      <div className="py-12 max-w-4xl mx-auto">
        <h2 className="text-4xl py-8 text-center font-logo font-semibold text-pretty">
          What Our Customers Are Saying...
        </h2>
        <hr />
        <div className="grid gap-6 md:grid-cols-3 py-16">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
