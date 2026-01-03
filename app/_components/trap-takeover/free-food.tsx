import Image from "next/image";
import Link from "next/link";

import underdogGrillLogo from "@/public/images/trap-takeover/other/underdog-grill.jpg";
import { FacebookIcon } from "@/app/_components/icons/facebook-icon";
import { InstagramIcon } from "@/app/_components/icons/instagram-icon";

export const FreeFood = ({ active }: { active: boolean }) => {
  if (!active) {
    return null;
  }

  return (
    <>
      <h3 className="font-logo py-8 pb-12 text-center text-3xl font-semibold md:text-left">
        Complimentary Meal
      </h3>
      <section className="flex flex-col items-center gap-4 rounded-lg bg-red-700 p-8 text-white md:flex-row">
        <div className="flex flex-col items-center">
          <Link
            href="https://www.instagram.com/underdoggrill/?hl=en"
            target="_blank">
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
              className="group rounded-full bg-white p-1 hover:bg-blue-600">
              <FacebookIcon className="transition-all group-hover:fill-white" />
            </Link>
            <Link
              href="https://www.instagram.com/underdoggrill/?hl=en"
              target="_blank"
              className="group rounded-full bg-white p-1 hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]">
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
              className="hover:underline">
              Underdog Grill!
            </Link>
          </p>
          <div className="flex flex-col gap-2 text-left text-base text-pretty">
            <p>
              In partnership with Underdog Grill, we&apos;re offering a free
              meal with every purchase of a promo product during the sale.
            </p>
            <p>
              Take your receipt with you to the Underdog Grill to receive your
              choice of a{" "}
              <strong>hot dog or a vegetarian taco just for stopping by</strong>
              .
            </p>
            <p>
              This promotion is only available during the sale, from 12 PM to 6
              PM. Available while supplies last.
            </p>
          </div>
        </div>
      </section>{" "}
    </>
  );
};
