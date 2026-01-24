import type { ReactNode } from "react";
import { LiaCannabisSolid, LiaCookieBiteSolid } from "react-icons/lia";
import { GiMasonJar } from "react-icons/gi";
import { SlPresent } from "react-icons/sl";

import { CartridgeIcon } from "@/app/_components/icons/cartridge";
import {
  fourTwentyDealsData,
  type Deal,
  type ReducedPriceDeal
} from "@/app/(main-site)/deals/420-deals/420-deals-data";

import { cn } from "@/lib/utils/shared";

interface FourTwentyDealCardProps {
  title: string;
  variant: "green" | "white";
  icon: ReactNode;
  bogoDeals: Deal[];
  reducedPriceDeals: ReducedPriceDeal[];
}

const FourTwentyDealCard = ({
  title,
  variant,
  icon,
  bogoDeals: deals,
  reducedPriceDeals
}: FourTwentyDealCardProps) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-between self-stretch md:flex-row",
        title === "Other" && "md:col-span-2"
      )}>
      <div
        className={cn(
          "flex h-full w-full flex-col items-center rounded-lg border-2 p-4 text-white md:gap-6 md:px-8",
          variant === "green" && "border-white bg-green-800",
          variant === "white" && "leaf border-green-800 bg-white text-green-800"
        )}>
        <h2 className="font-logo flex flex-col items-center justify-center pb-4 text-center text-3xl font-semibold">
          {icon}
          {title}
        </h2>
        <div className="flex flex-col gap-6">
          {deals.map((deal) => (
            <div key={deal.brand + deal.description}>
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
            <div className="flex flex-col text-lg font-semibold text-pretty">
              Reduced Prices on the following:
              <ul className="list-inside list-disc space-y-2 py-2 text-left text-base">
                {reducedPriceDeals.map((reducedPriceDeal) => (
                  <li key={reducedPriceDeal.description}>
                    {reducedPriceDeal.description}{" "}
                    {reducedPriceDeal.limit && (
                      <span className="text-sm">
                        (Limit {reducedPriceDeal.limit})
                      </span>
                    )}
                  </li>
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
        bogoDeals={fourTwentyDealsData.flowerAndPrerolls.bogoDeals}
        reducedPriceDeals={
          fourTwentyDealsData.flowerAndPrerolls.reducedPriceDeals
        }
      />

      {/* Edibles */}

      <FourTwentyDealCard
        title="Edibles"
        variant="white"
        icon={<LiaCookieBiteSolid className="h-12 w-12" />}
        bogoDeals={fourTwentyDealsData.edibles.bogoDeals}
        reducedPriceDeals={fourTwentyDealsData.edibles.reducedPriceDeals}
      />
      {/* Cartridges */}

      <FourTwentyDealCard
        title="Cartridges"
        variant="green"
        icon={<CartridgeIcon className="h-12 w-12" />}
        bogoDeals={fourTwentyDealsData.cartridges.bogoDeals}
        reducedPriceDeals={fourTwentyDealsData.cartridges.reducedPriceDeals}
      />
      {/* Concentrate */}

      <FourTwentyDealCard
        title="Concentrate"
        variant="white"
        icon={<GiMasonJar className="h-12 w-12" />}
        bogoDeals={fourTwentyDealsData.concentrates.bogoDeals}
        reducedPriceDeals={fourTwentyDealsData.concentrates.reducedPriceDeals}
      />

      {/* Other */}

      <FourTwentyDealCard
        title="Other"
        variant="green"
        icon={<SlPresent className="h-12 w-12" />}
        bogoDeals={fourTwentyDealsData.other.bogoDeals}
        reducedPriceDeals={fourTwentyDealsData.other.reducedPriceDeals}
      />
    </div>
  );
};
