import { ImageViewer } from "@/app/_components/image-viewer";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { TrapTakeoverCountdown } from "../trap-takeover-countdown";

// SHOW_PAGE determines whether to show the coming soon page or not
const SHOW_PAGE = true;

// HAVE_FLYER determines whether to show the flyer or not
const HAVE_FLYER = false;

const TRAP_TAKEOVER_DATE = "September 6th, 2024";
const TRAP_TAKEOVER_FLYER_URL = "/images/7-5-flyer.jpg";

type FeaturedBrand = {
  name: string;
  url: string;
  image: StaticImageData | string;
  alt: string;
};

// Local imports for the image assets
import midsFactoryLogo from "@/public/images/brands/midsfactory.png";
import dompenLogo from "@/public/images/brands/dompen.avif";
import koaLogo from "@/public/images/brands/koa.png";
import bigBoyDroLogo from "@/public/images/brands/big-boy-dro.png";
import greenRiverExtractsLogo from "@/public/images/brands/green-river-extracts-logo.png";

const FEATURED_BRANDS: FeaturedBrand[] = [
  {
    name: "Midsfactory",
    url: "https://www.midsfactory.com/",
    image: midsFactoryLogo,
    alt: "Midsfactory Logo",
  },
  {
    name: "Dompen",
    url: "https://www.dompen.co",
    image: dompenLogo,
    alt: "Dompen Logo",
  },
  {
    name: "Koa",
    url: "https://www.koacannabis.com/",
    image: koaLogo,
    alt: "Koa Logo",
  },
  {
    name: "Big Boy Dro",
    url: "https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=BIG%20BOY%20DRO",
    image: bigBoyDroLogo,
    alt: "Big Boy Dro Logo",
  },
  {
    name: "Green River Extracts",
    url: "https://www.greenriverextracts.com/",
    image: greenRiverExtractsLogo,
    alt: "Green River Extracts Logo",
  },
];

export default function TrapTakeoverPage() {
  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <span className="px-1 pb-1 text-gray-600">{TRAP_TAKEOVER_DATE}</span>
        <h1 className="pb-4 font-logo text-4xl font-semibold">Trap Takeover</h1>
        <hr className="pb-4" />
        <section>
          <h2 className="py-4 text-center font-logo text-3xl font-semibold md:text-left">
            Featured Brands
          </h2>
          <div
            className={cn(
              "flex flex-col flex-wrap justify-evenly py-8 text-lg sm:flex-row",
              SHOW_PAGE ? "" : "sm:justify-start",
            )}
          >
            {SHOW_PAGE ? (
              FEATURED_BRANDS.map((brand) => (
                <div
                  className="flex flex-col items-center hover:underline"
                  key={brand.name}
                >
                  <Link
                    className="flex flex-col items-center rounded border border-white p-2 outline-none focus:border-primary-purple focus:outline-primary-purple"
                    href={brand.url}
                    target="_blank"
                  >
                    <h3 className="text-center font-logo text-2xl font-semibold">
                      {brand.name}
                    </h3>
                    <Image
                      src={brand.image}
                      alt={brand.alt}
                      className="h-56 w-56"
                    />
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center text-3xl md:text-left">
                Coming soon...
              </div>
            )}
          </div>
        </section>
        {HAVE_FLYER ? (
          <ImageViewer
            className="mx-auto h-full w-full cursor-pointer object-cover object-top"
            src={TRAP_TAKEOVER_FLYER_URL}
            alt="Trap Takeover"
            width={1920}
            height={1080}
          />
        ) : (
          <TrapTakeoverCountdown
            linkUrl="https://illaguerrilla.com"
            target="_blank"
            labelText="Check out Illa Guerrilla"
          />
        )}
      </div>
    </main>
  );
}
