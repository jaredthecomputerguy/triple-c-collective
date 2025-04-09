import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

import { LiaCannabisSolid, LiaCookieBiteSolid } from "react-icons/lia";
import { GiMasonJar } from "react-icons/gi";
import { SlPresent } from "react-icons/sl";
import { CartridgeIcon } from "@/app/_components/icons/cartridge";

interface FourTwentyDealCardProps {
  title: string;
  variant: "green" | "white";
  icon: ReactNode;
  deals: Deal[];
  reducedPriceDeals: string[];
}

type Deal = {
  brand: string;
  description: string;
  limit?: number;
};

const FourTwentyDealCard = ({
  title,
  variant,
  icon,
  deals,
  reducedPriceDeals,
}: FourTwentyDealCardProps) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-between self-stretch md:flex-row",
        title === "Other" && "md:col-span-2",
      )}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col items-center rounded-lg border-2 p-4 text-white md:gap-6 md:px-8",
          variant === "green" && "border-white bg-green-800",
          variant === "white" &&
            "leaf border-green-800 bg-white text-green-800",
        )}
      >
        <h2 className="flex flex-col items-center justify-center pb-4 text-center font-logo text-3xl font-semibold">
          {icon}
          {title}
        </h2>
        <div className="flex flex-col gap-6">
          {deals.map((deal, idx) => (
            <div key={deal.description + idx}>
              <div className="flex flex-col text-left font-semibold">
                <div>
                  <span className="text-lg font-black">{deal.brand}</span> -{" "}
                  {deal.description}
                </div>
                {deal.limit && (
                  <span className="w-full text-sm">
                    (Limit {deal.limit} per customer)
                  </span>
                )}
              </div>
            </div>
          ))}
          {reducedPriceDeals.length > 0 && (
            <div className="flex flex-col text-pretty text-lg font-semibold">
              Reduced Prices on the following:
              <ul className="list-inside list-disc space-y-2 py-2 text-left text-base">
                {reducedPriceDeals.map((reducedPriceDeal, i) => (
                  <li key={i}>{reducedPriceDeal}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const FourTwentyDeals = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Flower */}
      <FourTwentyDealCard
        title="Flower & Prerolls"
        variant="green"
        icon={<LiaCannabisSolid className="h-12 w-12" />}
        deals={[
          {
            brand: "Big Boy Dro, Flawless, High Grade, & Seven Leaves",
            description: "Get 1 gram of flower for 25¢",
          },
          {
            brand: "Seven Leaves",
            description: "Buy any flower, get a free eighth (3.5g)",
          },
          {
            brand: "Eighty East",
            description: "Buy any flower, get a free eighth (3.5g)",
          },
          {
            brand: "High Grade & Flawless",
            description: "Buy any flower, get a free eighth (3.5g)",
          },
          {
            brand: "Clarkies",
            description: "Buy any flower, get a free eighth (3.5g)",
          },
          {
            brand: "Glasshouse Farms",
            description: "Buy any flower, get a free eighth (3.5g)",
          },
          {
            brand: "Papa's Herb",
            description: "Buy any infused preroll, get a second one free",
          },
          {
            brand: "Koa Cannabis Co.",
            description: "Buy any infused preroll 10pk, get a second one free",
          },
          {
            brand: "Midsfactory",
            description:
              "Buy an infused preroll, get your choice of any other Midsfactory product (cartridge, concetrate, infused preroll) for free",
          },
        ]}
        reducedPriceDeals={[
          "Hashtag Infused Flower 3.5g - $25",
          "Snicklefritz Flower 28g - $55",
          "Phat Panda Flower 28g - $55",
          "Phat Panda Flower 3.5g - $24",
          "Tyson Flower 3.5g - $35",
          "High Supply Flower 28g - $55",
          "High Supply Flower 14g - $40",
          "Coffee Supply Flower 3.5g - $20",
          "Seed Junky Flower 14g - $40",
          "Lumpy's Flower 7g - $30",
          "Lumpy's Flower 14g - $40",
          "Lumpy's Flower 3.5g - $22",
          "Big Boy Dro Tres Altos Flower 3.5g - $20",
          "Akwaaba Cakemera Flower 3.5g - $5",
          "Papa's Herb Flower 3.5g - $11",
          "Seven Leaves 1g Preroll - $2",
          "St. Ides 1g Infused Preroll - $20",
          "Garden Society CBD Preroll Pack 5pk - $20",
        ]}
      />

      {/* Edibles */}

      <FourTwentyDealCard
        title="Edibles"
        variant="white"
        icon={<LiaCookieBiteSolid className="h-12 w-12" />}
        deals={[
          {
            brand: "Kushy Punch",
            description: "Buy any pack of gummies, get a free pack",
          },
          {
            brand: "PLUS",
            description: "Buy any pack of gummies, get a free 10pk or 2pk pack",
          },

          {
            brand: "Emerald Sky",
            description: "Buy any pack of gummies, get a free pack",
          },
        ]}
        reducedPriceDeals={[
          "St. Ides Midnight Berries Seltzer - $3",
          "ALL Big Pete's Marshmallow Treats - $10",
          "Garden Society Gummies - $10",
          "Kikoko Tea Bags - $28",
          "Gelato Balm - $10",
        ]}
      />
      {/* Cartridges */}

      <FourTwentyDealCard
        title="Cartridges"
        variant="green"
        icon={<CartridgeIcon className="h-12 w-12" />}
        deals={[
          {
            brand: "Midsfactory",
            description:
              "Buy a cartridge, get your choice of any other Midsfactory product (cartridge, concetrate, infused preroll) for free",
          },
          {
            brand: "Stiiizy",
            description: "Buy any cartridge, get a free 1g cartridge",
          },
          {
            brand: "Dompen",
            description:
              "Buy any cartridge or disposable, get your choice of another cartridge or disposable for free testt",
          },
        ]}
        reducedPriceDeals={["ABX Sauce Cartridge - $30"]}
      />
      {/* Concentrate */}

      <FourTwentyDealCard
        title="Concentrate"
        variant="white"
        icon={<GiMasonJar className="h-12 w-12" />}
        deals={[
          {
            brand: "Midsfactory",
            description:
              "Buy a concentrate, get your choice of any other Midsfactory product (cartridge, concetrate, infused preroll) for free",
          },
          {
            brand: "Green River Extracts",
            description: "Buy a badder, get a live rosin badder for free",
          },
        ]}
        reducedPriceDeals={[
          "Rickett Pocket Dab Rig - $21",
          "Midsfactory Londonchello Concentrate - $21",
          "Midsfactory Sherbanger Concentrate - $15",
        ]}
      />

      {/* Other */}

      <FourTwentyDealCard
        title="Other"
        variant="green"
        icon={<SlPresent className="h-12 w-12" />}
        deals={[
          {
            brand: "First Four People In Line",
            description: "Merch/Goodie for the first 4 people in line",
          },
          {
            brand: "Tablets",
            description:
              "Buy any tablets, get two packs of LEVEL Protabs for free",
          },
        ]}
        reducedPriceDeals={[]}
      />
    </div>
  );
};
