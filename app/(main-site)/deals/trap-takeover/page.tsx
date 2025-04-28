import { cn, formatDate, getTrapTakeoverDateWithSuffix } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { TrapTakeoverCountdown } from "../trap-takeover-countdown";
import { getFeaturedBrands } from "./trap-takeover-brands";
import type { Metadata } from "next";
import { ImageViewer } from "@/app/_components/image-viewer";

// SHOW_PAGE determines whether to show the page or not
const SHOW_PAGE = true;

// HAVE_VIDEO determines whether to show the video flyer or not
const HAVE_VIDEO = false;

// HAVE_FLYER determines whether to show the paper flyer or not
const HAVE_FLYER = false;

// FLYER_PATH is the path to the digital flyer
const FLYER_PATH = "/images/trap-takeover/0404-flyer-no-giftbags.png";

// RAFFLE_RULES_PATH is the path to the raffle rules
const RAFFLE_RULES_PATH = "/images/trap-takeover/raffle-rules.png";

// HAVE_GIFT_BAGS determines whether the Trap Takeover is doing the gift bag promo
const HAVE_GIFT_BAGS = false;

const TRAP_TAKEOVER_DATE_STRING = formatDate("05/02/2025");

export async function generateMetadata(): Promise<Metadata> {
  const trapTakeoverDate = new Date(TRAP_TAKEOVER_DATE_STRING);

  const trapTakeoverDateWithSuffix =
    getTrapTakeoverDateWithSuffix(trapTakeoverDate);

  return {
    title: `${trapTakeoverDateWithSuffix} Trap Takeover | Triple C Collective`,
    description:
      "Join us at Triple C Collective for our Trap Takeover event in collaboration with Illa Guerrilla! Enjoy unbeatable BOGO deals on select premium cannabis brands, meet the Illa Guerrilla sales rep, and enter our raffle for a chance to win exclusive prize packs.",
    keywords: [
      "cannabis",
      "cannabis store",
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
      "trap takeover",
      "cannabis sale",
      "cannabis bogo",
      "flower sale",
      "edible sale",
      "cartridge sale",
      `Trap Takeover ${trapTakeoverDateWithSuffix} sale`,
    ],
    authors: [
      {
        name: "Jared Mercer",
        url: "https://jaredthecomputerguy.dev",
      },
    ],
    creator: "Jared Mercer",
    openGraph: {
      title: `Trap Takeover ${trapTakeoverDateWithSuffix} | Triple C Collective`,
      url: `${process.env.SITE_URL}`,
      description: "Lake County's Premier Cannabis Dispensary",
      images: `${process.env.SITE_URL}/opengraph-image.png`,
      siteName: "Triple C Collective",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Trap Takeover ${trapTakeoverDateWithSuffix}. | Triple C Collective`,
      description: "Lake County's Premier Cannabis Dispensary",
      images: [`${process.env.SITE_URL}/opengraph-image.png`],
    },
    robots: "all, noarchive",
    metadataBase: new URL(`${process.env.SITE_URL}`),
  };
}

// Pass `undefined` as the last arg to show the 'more brands coming soon...'
const featuredBrands = getFeaturedBrands(
  "Midsfactory",
  "Dompen",
  "Big Boy Dro",
  "Green River Extracts",
  "Koa Cannabis Co.",
  "Akwaaba",
  "Park Jams",
);

export default function TrapTakeoverPage() {
  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <span className="pb-1 text-gray-600">{TRAP_TAKEOVER_DATE_STRING}</span>
        <h1 className="font-logo pb-4 text-4xl font-semibold">Trap Takeover</h1>
        <hr className="pb-4" />
        <h2 className="font-logo py-8 pb-12 text-center text-2xl font-semibold md:text-left md:text-4xl">
          Get Ready for the Ultimate Cannabis Shopping Experience
        </h2>
        <div className="trap-takeover bg-primary-purple rounded-lg p-8 text-white">
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
            {HAVE_GIFT_BAGS && (
              <li>
                <strong>Gift Bags for the Early Birds:</strong> The first 50
                customers to show up for the sale will receive a complimentary
                gift bag loaded with goodies. Make sure to arrive early to snag
                one before they’re gone!{" "}
              </li>
            )}
          </ul>
        </div>

        <section className="py-8">
          <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
            Featured Brands
          </h3>
          <div
            className={cn(
              "flex flex-col flex-wrap justify-evenly py-8 text-lg sm:flex-row",
              SHOW_PAGE ? "" : "sm:justify-start",
            )}
          >
            {SHOW_PAGE ? (
              featuredBrands.map((brand) => (
                <div
                  className="flex flex-col items-center hover:underline"
                  key={brand.name ?? "undefined"}
                >
                  <Link
                    className="focus:border-primary-purple focus:outline-primary-purple flex flex-col items-center rounded-sm border border-white px-8 py-2 outline-hidden"
                    href={brand.url}
                    target="_blank"
                  >
                    <h3 className="font-logo w-full py-2 text-center text-2xl font-semibold">
                      {brand.name}
                    </h3>
                    {brand.name ? (
                      <Image
                        src={brand.image}
                        alt={brand.alt}
                        className="h-32 w-32 object-contain sm:h-56 sm:w-56"
                      />
                    ) : (
                      <div className="flex h-56 w-56 flex-col items-center justify-center text-center">
                        Brands coming soon...
                      </div>
                    )}
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

        {HAVE_VIDEO && (
          <section className="w-full">
            <video
              autoPlay
              muted
              preload="auto"
              className="mx-auto my-16 rounded-xl"
              loop
              playsInline
            >
              <source
                src="/videos/trap-takeover-0221-updated.mp4"
                type="video/mp4"
              />
            </video>
          </section>
        )}
        {HAVE_FLYER && (
          <section className="w-full">
            <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
              Deals
            </h3>
            <hr />
            <ImageViewer
              className="mx-auto my-16 rounded-xl"
              src={FLYER_PATH}
              alt="March 7th Trap Takeover Flyer"
              width={1236}
              height={1599}
            />
          </section>
        )}

        <section className="w-full" id="raffle-rules">
          <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
            Raffle Rules
          </h3>
          <hr />
          <ImageViewer
            className="mx-auto my-16 rounded-xl"
            src={RAFFLE_RULES_PATH}
            alt="Raffle Rules"
            width={1236}
            height={1599}
          />
        </section>
        <TrapTakeoverCountdown
          linkUrl="https://illaguerrilla.com"
          target="_blank"
          labelText="Check out Illa Guerrilla"
        />
      </div>
    </main>
  );
}
