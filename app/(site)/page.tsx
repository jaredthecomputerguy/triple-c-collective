import { Metadata } from "next";
import { ProductCarousel } from "./product-carousel";
import placeholderProducts from "./placeholder-products.json";

export const metadata: Metadata = {
  title: "Home | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export type Product = (typeof placeholderProducts)[number];

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
        </h1>
      </div>
      {/* TODO: Try to make product carousel work */}
      {/* <ProductCarousel products={placeholderProducts} /> */}
      <div className="py-16">
        <h2 className="text-4xl text-center">What our customers are saying</h2>
        <div>
          <blockquote className="text-center">
            <p className="text-xl">
              “I love Triple C Collective! They have a great selection of products and the staff is very friendly and
              helpful. I highly recommend this place!”
            </p>
            <cite className="text-lg font-semibold">- John Doe</cite>
          </blockquote>
          <blockquote className="text-center">
            <p className="text-xl">
              “I love Triple C Collective! They have a great selection of products and the staff is very friendly and
              helpful. I highly recommend this place!”
            </p>
            <cite className="text-lg font-semibold">- John Doe</cite>
          </blockquote>
          <blockquote className="text-center">
            <p className="text-xl">
              “I love Triple C Collective! They have a great selection of products and the staff is very friendly and
              helpful. I highly recommend this place!”
            </p>
            <cite className="text-lg font-semibold">- John Doe</cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
