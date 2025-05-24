import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { ImageViewer } from "@/app/_components/image-viewer";
import { cn, formatDate, getTrapTakeoverDateWithSuffix } from "@/lib/utils";
import { TrapTakeoverCountdown } from "@/app/(main-site)/deals/trap-takeover-countdown";
import { getFeaturedBrands } from "@/app/(main-site)/deals/trap-takeover/trap-takeover-brands";
import underdogGrillLogo from "@/public/images/trap-takeover/underdog-grill.jpg";
import { FacebookIcon } from "@/app/_components/icons/facebook-icon";
import { InstagramIcon } from "@/app/_components/icons/instagram-icon";

// SHOW_PAGE determines whether to show the page or not
const SHOW_PAGE = true;

// HAVE_VIDEO determines whether to show the video flyer or not
const HAVE_VIDEO = false;

// HAVE_FLYER determines whether to show the paper flyer or not
const HAVE_FLYER = false;

// FLYER_IMAGE_PATH is the path to image version of the digital flyer
const FLYER_IMAGE_PATH = "";

// FLYER_PDF_PATH is the path to the PDF version of the digital flyer
const FLYER_PDF_PATH = "";

// RAFFLE_RULES_PATH is the path to the raffle rules
const RAFFLE_RULES_PATH = "/images/trap-takeover/raffle-rules.png";

// HAVE_GIFT_BAGS determines whether the Trap Takeover is doing the gift bag promo
const HAVE_GIFT_BAGS = false;

// HAVE_FREE_FOOD determines whether we're doing the free food promo
const HAVE_FREE_FOOD = true;

const TRAP_TAKEOVER_DATE_STRING = formatDate("06/06/2025");

// Pass `undefined` as the last arg to show the 'more brands coming soon...'
const featuredBrands = getFeaturedBrands(
  "Akwaaba",
  "Midsfactory",
  "Dompen",
  "Koa Cannabis Co.",
  "Green River Extracts",
  "Park Jams",
);

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

        {HAVE_FREE_FOOD && (
          <>
            <h3 className="font-logo py-8 pb-12 text-center text-3xl font-semibold md:text-left">
              Complimentary Meal
            </h3>
            <section className="flex flex-col items-center gap-4 rounded-lg bg-red-700 p-8 text-white md:flex-row">
              <div className="flex flex-col items-center">
                <Link
                  href="https://www.instagram.com/underdoggrill/?hl=en"
                  target="_blank"
                >
                  <Image
                    className="my-2 cursor-pointer rounded-xl"
                    src={underdogGrillLogo}
                    alt="Underdog Grill Logo"
                    width={120}
                    height={30}
                  />
                </Link>
                <div className="flex gap-2">
                  <Link
                    href="https://www.facebook.com/UnderdogGrill?mibextid=wwXIfr"
                    target="_blank"
                    className="group rounded-full bg-white p-1 hover:bg-blue-600"
                  >
                    <FacebookIcon className="transition-all group-hover:fill-white" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/underdoggrill/?hl=en"
                    target="_blank"
                    className="group rounded-full bg-white p-1 hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]"
                  >
                    <InstagramIcon className="transition-all group-hover:fill-white" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-semibold mb-2 text-center text-xl text-pretty md:text-left">
                  Brought to you by{" "}
                  <Link
                    href="https://www.instagram.com/underdoggrill/?hl=en"
                    target="_blank"
                    className="hover:underline"
                  >
                    Underdog Grill!
                  </Link>
                </p>
                <div className="flex flex-col gap-2 text-left text-base text-pretty">
                  <p>
                    In partnership with Underdog Grill, we&apos;re offering a
                    free meal with every purchase of a promo product during the
                    sale.
                  </p>
                  <p>
                    Take your receipt with you to the Underdog Grill to receive
                    your choice of a{" "}
                    <strong>
                      hot dog or a vegetarian taco just for stopping by
                    </strong>
                    .
                  </p>
                  <p>
                    This promotion is only available during the sale, from 12 PM
                    to 6 PM. Available while supplies last.
                  </p>
                </div>
              </div>
            </section>{" "}
          </>
        )}

        <section className="py-8">
          <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
            Featured Brands
          </h3>
          <div
            className={cn(
              "grid grid-cols-2 place-items-center py-8 text-lg md:flex md:flex-wrap md:justify-evenly md:gap-4 md:py-12",
              SHOW_PAGE ? "" : "sm:justify-start",
            )}
          >
            {SHOW_PAGE ? (
              featuredBrands.map((brand) => {
                const isLast =
                  brand.name ===
                    featuredBrands[featuredBrands.length - 1].name &&
                  featuredBrands.length % 2 !== 0;

                return (
                  <div
                    className={cn(
                      "flex flex-col items-center hover:underline",
                      isLast && "col-span-2",
                    )}
                    key={brand.name ?? "undefined"}
                  >
                    <Link
                      className="focus:border-primary-purple focus:outline-primary-purple flex flex-col items-center rounded-sm border border-white px-2 py-2 outline-hidden"
                      href={brand.url}
                      target="_blank"
                    >
                      <h3 className="font-logo w-full py-2 text-center text-xl font-semibold">
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
                );
              })
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
          <section className="pb-8">
            <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
              Flyer
            </h3>
            <hr />
            <ImageViewer
              className="mx-auto my-8 w-full max-w-2xl cursor-pointer rounded-xl"
              src={FLYER_IMAGE_PATH}
              alt="March 7th Trap Takeover Flyer"
              width={1236}
              height={1599}
            />
            <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-2">
              <a
                className="bg-primary-purple hover:bg-primary-purple/90 w-full cursor-pointer rounded-sm px-6 py-2 text-center font-semibold text-white transition-all"
                href={FLYER_PDF_PATH}
                download
              >
                Download PDF
              </a>
              <a
                className="bg-primary-purple hover:bg-primary-purple/90 w-full cursor-pointer rounded-sm px-6 py-2 text-center font-semibold text-white transition-all"
                href={FLYER_IMAGE_PATH}
                download
              >
                Download Image
              </a>
            </div>
          </section>
        )}

        <section className="w-full" id="raffle-rules">
          <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
            Raffle Rules
          </h3>
          <hr />
          <ImageViewer
            className="mx-auto my-8 w-full max-w-2xl cursor-pointer rounded-xl"
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
