import { Metadata } from "next";
import reviews from "@/lib/data/reviews.json";
import { ReviewCard } from "../_components/review-card";
import { StoreIcon } from "../_components/icons/store";
import { StarRating } from "../_components/star-rating";
import { BrandCarousel } from "./brand-carousel";

// import { ProductCarousel } from "./product-carousel";
// import placeholderProducts from "@/lib/data/ placeholder-products.json";
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
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="flex items-center gap-4 justify-center pt-12">
            <StoreIcon className="stroke-primary-purple w-12 h-12" />
            <span className="text-primary-purple font-semibold text-3xl">Triple C Collective</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-primary-purple font-semibold text-4xl">4.4</span>
            <StarRating rating="4.4" className="max-w-40 sm:max-w-48" />
            <span className="text-gray-600 text-sm">(494 reviews)</span>
          </div>
        </div>
        <div className="grid gap-4 px-2 md:grid-cols-3 py-14">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-logo text-center pb-8 font-semibold">Featured Brands</h3>
        <hr className="pb-4" />
        <div className="flex items-center justify-center">
          <BrandCarousel />
        </div>
      </div>
    </div>
  );
}
