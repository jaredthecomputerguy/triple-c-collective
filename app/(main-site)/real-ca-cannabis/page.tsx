import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/_components/button";
import { type Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Real CA Cannabis | Triple C Collective",
  description:
    "Learn more about the Real CA Cannabis program at Triple C Collective, serving Lake County, California.",
  keywords: [
    "cannabis",
    "cannabis store",
    "real ca cannabis",
    "legal cannabis",
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
    title: "Real CA Cannabis | Triple C Collective",
    url: `${process.env.SITE_URL}`,
    description: "Lake County's Premier Cannabis Dispensary",
    images: `${process.env.SITE_URL}/opengraph-image.png`,
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real CA Cannabis | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    images: [`${process.env.SITE_URL}/opengraph-image.png`],
  },
  metadataBase: new URL(`${process.env.SITE_URL}`),
};

export default async function RealCACannabisPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#F3F4F6] py-6 md:py-12 lg:py-18">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="max-w-[350px] space-y-4 sm:max-w-none">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Real CA Cannabis Program
                  </h1>
                  <p className="text-muted-foreground max-w-[600px] md:text-xl">
                    The Department of Cannabis Control&apos;s &apos;Real CA
                    Cannabis&apos; program ensures you&apos;re purchasing from
                    licensed and compliant cannabis retailers. Support local
                    businesses and get the best quality products.
                  </p>
                  <div className="flex w-fit items-center gap-4">
                    <Button
                      variant="outline"
                      className="w-fit-content bg-[#114b3c] font-semibold text-white transition-all hover:bg-[#f0b268] hover:text-[#114b3e]"
                      asChild
                    >
                      <Link
                        href="https://real.cannabis.ca.gov/licensed-retailers/?address=95422"
                        prefetch={false}
                        target="_blank"
                      >
                        <div className="flex items-center gap-1">
                          <Search className="h-4 w-4" /> Find Legal Retailers
                        </div>
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="mx-auto my-2 w-fit border-black/50 hover:border-black hover:underline hover:shadow-sm"
                      asChild
                    >
                      <Link
                        href="https://real.cannabis.ca.gov/"
                        prefetch={false}
                        target="_blank"
                      >
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <Image
                src="/images/dcc-0.jpg"
                width="550"
                height="550"
                alt="Won't the Real CA Cannabis please stand up? Cover photo"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                priority
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full bg-[#114b3c] py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="max-w-[350px] space-y-4 text-white sm:max-w-none">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What is the Real CA Cannabis Program?
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Real CA Cannabis program is an initiative by the
                  California Department of Cannabis Control to help consumers
                  identify licensed and compliant cannabis retailers. By
                  purchasing from these verified businesses, you can be
                  confident you&apos;re getting high-quality, safe products.
                </p>
              </div>
              <Image
                src="/images/dcc-1.jpg"
                width="550"
                height="550"
                alt="Real CA Cannabis"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section
          id="importance"
          className="w-full bg-[#F3F4F6] py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/images/dcc-2.jpg"
                width="550"
                height="400"
                alt="Real CA Cannabis"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full"
              />
              <div className="max-w-[350px] space-y-4 sm:max-w-none">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Why Purchasing from Licensed Retailers Matters
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Buying cannabis from licensed and compliant retailers ensures
                  you&apos;re getting safe, high-quality products that meet
                  strict regulatory standards. This supports the legal cannabis
                  industry in California and helps protect consumers from the
                  risks of the illicit market.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="logos"
          className="w-full bg-[#f4ebdd] py-12 text-[#114b3c] md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recognized by the State of California
                </h2>
                <p className="text-muted-foreground max-w-[900px] font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Real CA Cannabis program is an official initiative of the
                  California Department of Cannabis Control. We&apos;re proud to
                  work with them to help you shop safely and responsibly.
                </p>
              </div>
              <div className="flex flex-col">
                <Image
                  src="/images/dcc-logo.png"
                  width={280}
                  height={140}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="factsheet"
          className="w-full bg-[#F3F4F6] py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Download the Real CA Cannabis Fact Sheet
                </h2>
                <p className="text-muted-foreground max-w-[900px] pb-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get all the details about the Real CA Cannabis program in this
                  downloadable fact sheet.
                </p>
              </div>
              <div className="flex min-w-full flex-col items-center justify-center space-y-4 text-center">
                <Button
                  className="w-fit-content bg-[#114b3c] font-semibold text-white transition-all hover:bg-[#f0b268] hover:text-[#114b3e]"
                  asChild
                >
                  <a
                    href="/pdf/dcc-factbook.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download="real-ca-cannabis-factsheet.pdf"
                    title="Download the Real CA Cannabis Fact Sheet"
                  >
                    Download Fact Sheet
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
