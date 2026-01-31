import type { Metadata } from "next";

import { TrapTakeoverCountdown } from "@/app/(main-site)/deals/trap-takeover-countdown";
import { FreeFood } from "@/app/_components/trap-takeover/free-food";
import { SpecialArtPromo } from "@/app/_components/trap-takeover/special-art-promo";
import { SpecialPromo } from "@/app/_components/trap-takeover/special-promo";
import { FeaturedBrands } from "@/app/_components/trap-takeover/featured-brands";
import { TrapTakeoverVideo } from "@/app/_components/trap-takeover/trap-takeover-video";
import { TrapTakeoverFlyer } from "@/app/_components/trap-takeover/trap-takeover-flyer";
import { TrapTakeoverRaffleRules } from "@/app/_components/trap-takeover/trap-takeover-raffle-rules";
import { GiftBags } from "@/app/_components/trap-takeover/gift-bags";
import { getFeaturedBrands } from "@/app/_components/trap-takeover/trap-takeover-brands";

/* TODO: Eventually I will use this component. For now, we don't have visibility into the specific deals before the sale day
 *
import {
  IndividualDeals,
  type IndividualDeal
} from "@/app/_components/trap-takeover/individual-deals"; 
*/

import {
  formatAndValidateDate,
  getTrapTakeoverDateWithSuffix
} from "@/lib/utils/server";
import { createMetadata } from "@/lib/metadata";

const TRAP_TAKEOVER_DATE_STRING = formatAndValidateDate({
  year: 2026,
  month: 2,
  day: 6
});

const featuredBrands = getFeaturedBrands(
  "Akwaaba",
  "Midsfactory",
  "Dompen",
  "Together Canna Supply",
  "Koa Cannabis Co.",
  "Park Jams",
  "Green River Extracts",
  "Sweetleaf Collective"
  // "And more..."
);

const flags = {
  featuredBrands: true,
  flyer: true,

  giftBags: false,
  freeFood: false,
  specialArtPromo: false,
  specialPromo: false,
  video: false,
  individualDeals: false
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const trapTakeoverDate = new Date(TRAP_TAKEOVER_DATE_STRING);

  const trapTakeoverDateWithSuffix =
    getTrapTakeoverDateWithSuffix(trapTakeoverDate);

  return createMetadata({
    title: trapTakeoverDateWithSuffix,
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
      `Trap Takeover ${trapTakeoverDateWithSuffix} sale`
    ],
    openGraph: {
      title: `Trap Takeover ${trapTakeoverDateWithSuffix} | Triple C Collective`,
      siteName: "Triple C Collective",
      locale: "en_US",
      type: "website"
    }
  });
}

export default function TrapTakeoverPage() {
  const flyerInfo = {
    path: "/images/trap-takeover/2026/02/020626-flyer",
    date: new Date(TRAP_TAKEOVER_DATE_STRING)
  };

  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
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
            We’re teaming up with Illa Guerrilla to bring you unbeatable deals
            and a night to remember. Here’s what you can look forward to:
          </p>
          <ul className="list-inside list-decimal space-y-6">
            <li>
              <strong className="text-semibold">Buy One, Get One Free:</strong>{" "}
              Stock up on your favorites with BOGO deals on select premium
              brands. It’s the perfect opportunity to explore new products or
              get more of what you love.
            </li>
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
            <GiftBags active={flags.giftBags} />
          </ul>
        </div>

        <FreeFood active={flags.freeFood} />

        <SpecialArtPromo active={flags.specialArtPromo} />

        <SpecialPromo
          active={flags.specialPromo}
          title="T-Shirts for the First 50 Customers!"
          description="The first 50 customers in line get an exclusive T-shirt free just for coming in!"
        />

        <FeaturedBrands
          active={flags.featuredBrands}
          featuredBrands={featuredBrands}
        />

        {/* <IndividualDeals active={flags.individualDeals} deals={individualDeals} /> */}

        <TrapTakeoverVideo active={flags.video} />

        <TrapTakeoverFlyer
          active={flags.flyer}
          flyerImagePath={`${flyerInfo.path}.png`}
          flyerPDFPath={`${flyerInfo.path}.pdf`}
          flyerImageAlt={`${TRAP_TAKEOVER_DATE_STRING} Trap Takeover Flyer`}
        />

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
