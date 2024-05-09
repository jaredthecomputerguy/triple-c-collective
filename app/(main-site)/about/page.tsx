import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Triple C Collective",
  description:
    "Learn more about Triple C Collective, Lake County's premier cannabis dispensary.",
  keywords: [
    "cannabis",
    "dispensary",
    "marijuana",
    "weed",
    "pot",
    "Lake County",
    "California",
    "Triple C Collective",
    "flower",
    "dab",
    "concentrate",
    "edibles",
    "cbd",
    "kratom",
    "wellness",
    "Clearlake",
  ],
  authors: [
    {
      name: "Jared Mercer",
      url: "https://jaredthecomputerguy.dev",
    },
  ],
  creator: "Jared Mercer",
  openGraph: {
    title: "About | Triple C Collective",
    url: `${process.env.SITE_URL}`,
    description: "Lake County's Premier Cannabis Dispensary",
    images: `${process.env.SITE_URL}/opengraph-image.png`,
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

export default function AboutPage() {
  return (
    <main className="mx-auto bg-[#fefefe]" id="main-content">
      <div className="relative flex flex-col items-center justify-center">
        <Image
          className="aspect-video h-full max-h-[600px] w-full object-cover"
          src="/images/store-updated-2.jpg"
          alt="Triple C Collective Storefront"
          width={1751}
          height={985}
          priority
          quality={100}
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/50" />
        <span className="absolute font-logo text-3xl font-semibold text-white sm:text-5xl">
          About Us
        </span>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-6 sm:py-12">
        <p className="mx-auto max-w-4xl text-pretty text-center text-xl font-semibold md:py-12 md:text-2xl">
          Welcome to{" "}
          <span className="text-primary-purple">Triple C Collective</span>, your
          trusted destination for a premium cannabis experience! With over 15
          years of dedicated service, we take pride in being a cornerstone in
          the cannabis community.
        </p>
        <div className="my-6 flex flex-col items-center gap-2 md:gap-4">
          <div className="flex flex-col items-center gap-6 py-6 lg:flex-row">
            <div className="flex flex-col justify-center gap-2 md:gap-4 md:px-12">
              <h2 className="text-2xl md:text-4xl">Our Journey</h2>
              <hr className="pb-2" />
              <p className="text-lg">
                Since our establishment in 2009, we&apos;ve been committed to
                providing a diverse range of high-quality products and
                exceptional service to both medicinal and recreational cannabis
                enthusiasts. Our enduring presence in the industry reflects our
                passion for cultivating a welcoming environment where everyone
                can explore the benefits of cannabis in a safe and knowledgeable
                manner.
              </p>
            </div>
            <Image
              className="aspect-[3/2] rounded-xl object-cover"
              src="/images/lake-county.jpg"
              width={600}
              height={400}
              alt="Lake County, CA Hillside"
            />
          </div>
          <div className="flex flex-col items-center gap-6 py-6 lg:flex-row-reverse">
            <div className="flex flex-col justify-center gap-2 md:gap-4 md:px-12">
              <h2 className="text-2xl md:text-4xl">Experienced Staff</h2>
              <hr className="pb-2" />
              <p className="text-lg">
                Our dedicated team of cannabis enthusiasts brings unparalleled
                knowledge and expertise to guide you while you shop. From
                cultivation techniques to product recommendations, trust our
                experienced staff to provide personalized and informed
                assistance, ensuring a memorable and fulfilling cannabis
                experience for every visitor.
              </p>
            </div>
            <Image
              className="aspect-[3/2] rounded-xl object-cover"
              src="/images/staff.jpg"
              width={600}
              height={400}
              alt="Dispensary Staff"
            />
          </div>
          <div className="flex flex-col items-center gap-6 py-6 lg:flex-row">
            <div className="flex flex-col justify-center gap-2 md:gap-4 md:px-12">
              <h2 className="text-2xl md:text-4xl">Our Commitment to You</h2>
              <hr className="pb-2" />
              <p className="text-lg">
                At Triple C Collective, we understand that each
                individual&apos;s cannabis preferences are unique. Whether
                you&apos;re seeking relief for medical purposes or exploring
                recreational options, our knowledgeable staff is here to guide
                you through our curated selection. We pride ourselves on
                offering a unique variety of strains, edibles, and other
                cannabis products to cater to every preference.
              </p>
            </div>
            <Image
              className=" aspect-[3/2] rounded-xl object-cover"
              src="/images/commitment.jpg"
              width={600}
              height={400}
              alt="Woman holding cannabis plant"
            />
          </div>
          <div className="flex flex-col items-center gap-6 py-6 lg:flex-row-reverse">
            <div className="flex flex-col justify-center gap-2 md:gap-4 md:px-12">
              <h2 className="text-2xl md:text-4xl">Beyond Cannabis</h2>
              <hr className="pb-2" />
              <p className="text-lg">
                In addition to our extensive cannabis collection, we offer a
                selection of kratom and premium CBD products. These alternatives
                complement our commitment to holistic well-being, providing
                options for those looking for diverse wellness solutions.
              </p>
            </div>
            <Image
              className="aspect-[3/2] rounded-xl object-cover"
              src="/images/wellness-2.jpg"
              width={600}
              height={400}
              alt="CBD oil"
            />
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-16">
          <p className="mx-auto max-w-4xl text-pretty text-center text-xl font-semibold md:text-2xl">
            Thank you for being a part of the Triple C Collective family.
            We&apos;ll work hard to continue being your favorite cannabis
            collective for many years to come!
          </p>
        </div>
      </section>
    </main>
  );
}
