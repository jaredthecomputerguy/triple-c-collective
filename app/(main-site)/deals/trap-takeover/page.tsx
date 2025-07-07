import type { Metadata } from "next";

import { formatDate, getTrapTakeoverDateWithSuffix } from "@/lib/utils";
import { TrapTakeoverCountdown } from "@/app/(main-site)/deals/trap-takeover-countdown";
import { getFeaturedBrands } from "@/app/_components/trap-takeover/trap-takeover-brands";

import { FreeFood } from "@/app/_components/trap-takeover/free-food";
import { SpecialPromo } from "@/app/_components/trap-takeover/special-promo";
import { FeaturedBrands } from "@/app/_components/trap-takeover/featured-brands";
import { TrapTakeoverVideo } from "@/app/_components/trap-takeover/trap-takeover-video";
import { TrapTakeoverFlyer } from "@/app/_components/trap-takeover/trap-takeover-flyer";
import { TrapTakeoverRaffleRules } from "@/app/_components/trap-takeover/trap-takeover-raffle-rules";

/** HAVE_GIFT_BAGS determines whether the Trap Takeover is doing the gift bag promo */
const HAVE_GIFT_BAGS = false;

const TRAP_TAKEOVER_DATE_STRING = formatDate("07/18/2025");

// Pass `undefined` as the last arg to show the 'more brands coming soon...'
const featuredBrands = getFeaturedBrands(undefined);

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

export default function TrapTakeoverPage() {
  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        {/* TODO: DELETE ME ONCE THE WEEKEND IS OVER */}
        <div className="rounded py-2 text-center text-2xl">
          <span className="font-semibold">
            The sale is continuing until{" "}
            <strong className="font-logo font-bold">Monday, July 7th</strong>!
          </span>
        </div>
        {/* END: DELETE ME ONCE THE WEEKEND IS OVER */}
        <span className="pb-1 text-gray-600">{TRAP_TAKEOVER_DATE_STRING}</span>
        <h1 className="font-logo pb-4 text-4xl font-semibold">
          Trap Takeover Sale
        </h1>
        <hr className="pb-4" />

        <h2 className="font-logo py-8 pb-12 text-center text-2xl font-semibold md:text-left md:text-4xl">
          Double Up on Your Favorites Every Month
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
              receive a raffle ticket. At 6 PM, we’ll draw a ticket for a chance
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

        <FreeFood active={false} />

        <SpecialPromo active={false} />

        <FeaturedBrands active={true} featuredBrands={featuredBrands} />

        <TrapTakeoverVideo active={false} />

        <TrapTakeoverFlyer active={false} />

        <TrapTakeoverRaffleRules />

        <TrapTakeoverCountdown
          linkUrl="https://illaguerrilla.com"
          target="_blank"
          labelText="Check out Illa Guerrilla"
        />
      </div>
    </main>
  );
}
