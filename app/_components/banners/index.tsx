import type { ComponentType, ReactNode } from "react";

import { TrapTakeoverBanner } from "@/app/_components/banners/trap-takeover-banner";
import { StiiizyBanner } from "@/app/_components/banners/stiiizy-banner";
import { CloneBanner } from "@/app/_components/banners/clone-banner";
import { FourTwentyBanner } from "@/app/_components/banners/4-20-banner";
import { ChristmasBanner } from "@/app/_components/banners/christmas-banner";
import { MemorialDayBanner } from "@/app/_components/banners/memorial-day-banner";
import { MothersDayBanner } from "@/app/_components/banners/mothers-day-banner";
import { FathersDayBanner } from "@/app/_components/banners/fathers-day-banner";
import { NewYearBanner } from "@/app/_components/banners/new-year-banner";
import { NewsletterBanner } from "@/app/_components/banners/newsletter-banner";
import { SevenTenSaleBanner } from "@/app/_components/banners/710-sale-banner/";
import { SnapchatBanner } from "@/app/_components/banners/snapchat-banner";
import { StPatricksBanner } from "@/app/_components/banners/st-patricks-banner";
import { GenericBanner } from "@/app/_components/banners/generic-banner";
import Link from "next/link";

type PropsOf<T> = T extends ComponentType<infer P> ? P : never;

type BannerEntry<T extends ComponentType<any>> = {
  Component: T;
  active: boolean;
  props?: Partial<PropsOf<T>>;
  children?: ReactNode;
};

/*
 *  This component is a bit of typescript magic. It's a list of all the banners
 *  that are currently being used. It's used to dynamically render the banners
 *  based on the current date.
 *
 *  The banners are rendered in the order they are listed in this file. So if
 *  you want to add a new banner, you need to make sure it's listed first.
 */

const bannerConfig: [
  BannerEntry<typeof GenericBanner>,
  BannerEntry<typeof TrapTakeoverBanner>,
  BannerEntry<typeof StiiizyBanner>,
  BannerEntry<typeof CloneBanner>,
  BannerEntry<typeof FourTwentyBanner>,
  BannerEntry<typeof ChristmasBanner>,
  BannerEntry<typeof MemorialDayBanner>,
  BannerEntry<typeof MothersDayBanner>,
  BannerEntry<typeof FathersDayBanner>,
  BannerEntry<typeof NewYearBanner>,
  BannerEntry<typeof NewsletterBanner>,
  BannerEntry<typeof SevenTenSaleBanner>,
  BannerEntry<typeof SnapchatBanner>,
  BannerEntry<typeof StPatricksBanner>,
] = [
  {
    Component: GenericBanner,
    active: true,
    props: {
      children: (
        // TODO: Add me back after labor day weekend
        // <div className="text-[#050505]">
        //   <span className="uppercase">
        //     NOW ACCEPTING CREDIT CARDS &amp; TAP TO PAY
        //   </span>
        // </div>
        <div className="text-[#050505]">
          <Link
            href="/deals"
            className="flex flex-col items-center justify-center gap-1 px-4 py-3 text-center text-[#fefefe] transition hover:underline md:text-xl"
          >
            LABOR DAY WEEKEND SALE
          </Link>
        </div>
      ),
      className:
        "relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-2 font-bold text-white uppercase",
    },
  },
  {
    Component: TrapTakeoverBanner,
    active: false,
    props: {
      bannerText: "Trap Takeover Sale",
      bannerSubText: "Sept. 5th | 12-6PM",
    },
  },
  {
    Component: StiiizyBanner,
    active: true,
    props: {},
  },
  {
    Component: CloneBanner,
    active: false,
    props: {},
  },
  {
    Component: FourTwentyBanner,
    active: false,
    props: {},
  },
  {
    Component: ChristmasBanner,
    active: false,
    props: {},
  },
  {
    Component: MemorialDayBanner,
    active: false,
    props: {},
  },
  {
    Component: MothersDayBanner,
    active: false,
    props: {},
  },
  {
    Component: FathersDayBanner,
    active: false,
    props: {},
  },
  {
    Component: NewYearBanner,
    active: false,
    props: {},
  },
  {
    Component: NewsletterBanner,
    active: false,
    props: {},
  },
  {
    Component: SevenTenSaleBanner,
    active: false,
    props: {},
  },
  {
    Component: SnapchatBanner,
    active: false,
    props: {},
  },
  {
    Component: StPatricksBanner,
    active: false,
    props: {},
  },
];

export const Banner = () => {
  return (
    <>
      {bannerConfig.map(({ Component, active, props, children }) => {
        return (
          <Component key={Component.name} {...props} active={active}>
            {children}
          </Component>
        );
      })}
    </>
  );
};
