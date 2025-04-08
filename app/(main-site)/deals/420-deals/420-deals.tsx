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
}

export const FourTwentyDeals = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Flower */}
      <FourTwentyDealCard
        title="Flower"
        variant="green"
        icon={<LiaCannabisSolid className="h-12 w-12" />}
      />

      {/* Edibles */}

      <FourTwentyDealCard
        title="Edibles"
        variant="white"
        icon={<LiaCookieBiteSolid className="h-12 w-12" />}
      />
      {/* Cartridges */}

      <FourTwentyDealCard
        title="Cartridges"
        variant="green"
        icon={<CartridgeIcon className="h-12 w-12" />}
      />
      {/* Concentrate */}

      <FourTwentyDealCard
        title="Concentrate"
        variant="white"
        icon={<GiMasonJar className="h-12 w-12" />}
      />

      {/* Other */}

      <FourTwentyDealCard
        title="Other"
        variant="green"
        icon={<SlPresent className="h-12 w-12" />}
      />
    </div>
  );
};

const FourTwentyDealCard = ({
  title,
  variant,
  icon,
}: FourTwentyDealCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between md:flex-row",
        title === "Other" && "md:col-span-2",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col items-center rounded-lg border-2 p-4 text-white md:gap-6 md:px-8",
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
          <div className="flex flex-col text-left font-semibold">
            {" "}
            Get a gram of the following brands for only 25¢: Eighty East, B.O.B,
            Glasshouse Farms, High Grade
            <span className="w-full text-sm">(Limit 4 per customer)</span>
          </div>
          <div className="flex flex-col font-semibold ">
            {" "}
            $1.50 for a Papa&apos;s Herb 1g infused pre-roll
            <span className="sm w-full text-sm">(Limit 1 per customer)</span>
          </div>
          <div className="flex flex-col text-pretty font-semibold ">
            {" "}
            Purchase any 1/8th, 1/4oz, or 1/2oz and get two Phat Panda or one
            High Grade Farms 1/8th for a penny
            <span className="sm w-full text-sm">
              (Limit 2 Phat Panda or 1 High Grade Farms per customer)
            </span>
          </div>
          <div className="flex flex-col text-pretty font-semibold ">
            {" "}
            Purchase any 1oz flower and get two Phat Panda gummies for a penny
            <span className="sm w-full text-sm">(Limit 2 per customer)</span>
          </div>
          <div className="flex flex-col text-pretty font-semibold ">
            {" "}
            Purchase any preroll, and get two penny prerolls from the following
            brands:
            <br />
            <span className="text-sm">
              Glasshouse Farms, Mas Cannabis, Phat Panda
            </span>
            <span className="sm w-full text-sm">(Limit 2 per customer)</span>
          </div>
          <div className="flex flex-col text-pretty font-semibold">
            {" "}
            Reduced Prices on the following products:
            <ul className="list-inside list-disc py-2 text-left text-sm">
              <li>Snicklefritz - Oreoz 3.5g</li>
              <li>Big Boy Dro - Kung Pao 3.5g</li>
              <li>Big Boy Dro - Franco&apos;s Secret Stash 3.5g</li>
              <li>Big Boy Dro - Raspberry Gelato 3.5g</li>
              <li>Big Boy Dro - Rico Suave 3.5g</li>
              <li>El Blunto - Rose Petal Preroll</li>
              <li>Koa - XJ13 x Truffle Monkey Preroll Pack</li>
              <li>Koa - Garlic Cocktail x Oreoz Preroll Pack</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
