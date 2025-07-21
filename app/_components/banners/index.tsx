import type { ComponentType } from "react";

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

type PropsOf<T> = T extends ComponentType<infer P> ? P : never;

type BannerEntry<T extends ComponentType<any>> = {
  Component: T;
  active: boolean;
  props?: Partial<PropsOf<T>>;
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
    Component: TrapTakeoverBanner,
    active: true,
    props: {
      bannerText: "Trap Takeover Sale",
      bannerSubText: "Fri, August 1st - 12-6PM",
    },
  },
  {
    Component: StiiizyBanner,
    active: false,
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
      {bannerConfig.map(({ Component, active, props }) => {
        return <Component key={Component.name} {...props} active={active} />;
      })}
    </>
  );
};
