import { ImageViewer } from "@/app/_components/image-viewer";
import { cn, formatDate } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { TrapTakeoverCountdown } from "../trap-takeover-countdown";

// SHOW_PAGE determines whether to show the coming soon page or not
const SHOW_PAGE = true;
// HAVE_FLYER determines whether to show the flyer or not
const HAVE_FLYER = true;
const TRAP_TAKEOVER_DATE = formatDate("09-20-2024");
const TRAP_TAKEOVER_FLYER_URL = "/images/9-20-trap-takeover-large.jpg";

type FeaturedBrand = {
  name: string;
  url: string;
  image: StaticImageData | string;
  alt: string;
};

// Local imports for the image assets
import jeffSessionLogo from "@/public/images/brands/jeff-sessions-logo.png";
import dompenLogo from "@/public/images/brands/dompen.avif";
import koaLogo from "@/public/images/brands/koa.png";
import masCannabisLogo from "@/public/images/brands/mas-cannabis-logo.jpg";
import roninRosinLogo from "@/public/images/brands/ronin-logo.jpg";

/*
 *  - Jeff Session
 *  - DomPen
 *  - Koa
 *  - Mas Cannabis
 *  - Ronin Rosin
 * */

const FEATURED_BRANDS: FeaturedBrand[] = [
  {
    name: "Jeff's Sessions",
    url: "https://jeffssessions.com/",
    image: jeffSessionLogo,
    alt: "Jeff's Sessions Logo",
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
    name: "Más Cannabis",
    url: "https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%7B%7D&brands=MAS CANNABIS CO.",
    image: masCannabisLogo,
    alt: "Más Cannabis Logo",
  },
  {
    name: "Ronin",
    url: "https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=RONIN",
    image: roninRosinLogo,
    alt: "Ronin Logo",
  },
];

export default function TrapTakeoverPage() {
  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <span className="pb-1 text-gray-600">{TRAP_TAKEOVER_DATE}</span>
        <h1 className="pb-4 font-logo text-4xl font-semibold">Trap Takeover</h1>
        <hr className="pb-4" />
        <h2 className="py-8 pb-12 text-center font-logo text-2xl font-semibold md:text-left md:text-4xl">
          Get Ready for the Ultimate Cannabis Shopping Experience
        </h2>
        <div className="trap-takeover rounded-lg bg-primary-purple p-8 text-white">
          <p className="pb-4 text-2xl">
            {" "}
            We’re teaming up with Illa Guerrilla to bring you unbeatable deals
            and a night to remember. Here’s what you can look forward to:
          </p>{" "}
          <ul className="list-inside list-decimal space-y-6">
            <li>
              <strong className="text-semibold">Buy One, Get One Free:</strong>{" "}
              Stock up on your favorites with BOGO deals on select premium
              brands. It’s the perfect opportunity to explore new products or
              get more of what you love.
            </li>{" "}
            <li>
              <strong>Learn about Illa Guerrilla:</strong> Our Illa Guerrilla
              sales rep will be on-site with a booth, showcasing product
              displays and ready to answer all your cannabis questions.{" "}
            </li>
            <li>
              <strong>Raffle Prizes:</strong> For every promo purchase, you’ll
              receive a raffle ticket. At 8 PM, we’ll draw a ticket for a chance
              to win an exclusive prize pack filled with promo products and swag
              from top cannabis brands. Don’t miss your chance to win big!
            </li>
            <li>
              <strong>Gift Bags for the Early Birds:</strong> The first 50
              customers to show up for the sale will receive a complimentary
              gift bag loaded with goodies. Make sure to arrive early to snag
              one before they’re gone!{" "}
            </li>
          </ul>
        </div>
        <section className="py-8">
          <h3 className="py-4 text-center font-logo text-3xl font-semibold md:text-left">
            Featured Brands
          </h3>
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
                    <h3 className="w-full py-2 text-center font-logo text-2xl font-semibold">
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
        <section></section>
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
