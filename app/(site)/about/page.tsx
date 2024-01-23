import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto bg-[#fefefe]">
      <div className="relative flex flex-col items-center justify-center">
        <Image
          className="object-cover aspect-video md:aspect-auto"
          src="/images/store-cropped.jpg"
          alt="Triple C Collective Storefront"
          width={4900}
          height={2100}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        <span className="absolute text-3xl font-semibold text-white sm:text-5xl font-logo">About Us</span>
      </div>
      <section className="px-4 py-6 mx-auto sm:py-12 max-w-7xl">
        <p className="max-w-4xl mx-auto text-xl font-semibold text-center md:text-2xl md:py-12 text-pretty">
          Welcome to <span className="text-primary-purple">Triple C Collective</span>, your trusted destination for a
          premium cannabis experience! With over 15 years of dedicated service, we take pride in being a cornerstone in
          the cannabis community.
        </p>
        <div className="flex flex-col items-center gap-2 my-6 md:gap-4">
          <div className="flex flex-col gap-6 py-6 md:flex-row">
            <div className="flex flex-col justify-center gap-2 md:gap-4 md:px-12">
              <h2 className="text-2xl md:text-4xl">Our Journey</h2>
              <hr className="pb-2" />
              <p className="text-lg">
                Since our establishment in 2009, Triple C Collective has been committed to providing a diverse range of
                high-quality products and exceptional service to both medicinal and recreational cannabis enthusiasts.
                Our enduring presence in the industry reflects our passion for cultivating a welcoming environment where
                everyone can explore the benefits of cannabis in a safe and knowledgeable manner.
              </p>
            </div>
            <Image
              src="/images/generic-blog.jpg"
              width={600}
              height={400}
              // TODO: Find a better alt tag and change my image
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 py-6 md:flex-row-reverse">
            <div className="flex flex-col justify-center gap-2 md:gap-4 md:px-12">
              <h2 className="text-2xl md:text-4xl">Meet our Owner</h2>
              <hr className="pb-2" />
              <p className="text-lg">
                Angie De Coux, the heart and soul behind Triple C Collective, brings a wealth of experience and a
                genuine commitment to enhancing the well-being of our community. Her vision has shaped our dispensary
                into a haven for those seeking top-notch cannabis products, as well as alternative solutions like kratom
                and select CBD offerings.
              </p>
            </div>
            <Image
              src="/images/generic-blog.jpg"
              width={600}
              height={400}
              // TODO: Find a better alt tag  and change my image
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 py-6 md:flex-row">
            <div className="flex flex-col justify-center gap-2 md:gap-4 md:px-12">
              <h2 className="text-2xl md:text-4xl">Our Commitment to You</h2>
              <hr className="pb-2" />
              <p className="text-lg">
                At Triple C Collective, we understand that each individual&apos;s cannabis journey is unique. Whether
                you&apos;re seeking relief for medical purposes or exploring recreational options, our knowledgeable
                staff is here to guide you through our curated selection. We pride ourselves on offering a variety of
                strains, edibles, and other cannabis products to cater to every preference.
              </p>
            </div>
            <Image
              src="/images/generic-blog.jpg"
              width={600}
              height={400}
              // TODO: Find a better alt tag  and change my image
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 py-6 md:flex-row-reverse">
            <div className="flex flex-col justify-center gap-2 md:gap-4 md:px-12">
              <h2 className="text-2xl md:text-4xl">Beyond Cannabis</h2>
              <hr className="pb-2" />
              <p className="text-lg">
                In addition to our extensive cannabis collection, we are excited to offer a selection of kratom and
                premium CBD products. These alternatives complement our commitment to holistic well-being, providing
                options for those looking for diverse wellness solutions.
              </p>
            </div>
            <Image
              src="/images/generic-blog.jpg"
              width={600}
              height={400}
              // TODO: Find a better alt tag  and change my image
              alt=""
            />
          </div>
        </div>
        {/* BOTTOM CALL OF ACTION */}
        <div className="max-w-4xl py-16 mx-auto">
          <p className="max-w-4xl mx-auto text-xl font-semibold text-center md:text-2xl text-pretty">
            Thank you for being a part of the Triple C Collective family. Your well-being is our priority, and we look
            forward to serving you for many more years to come!
          </p>
        </div>
      </section>
    </div>
  );
}
