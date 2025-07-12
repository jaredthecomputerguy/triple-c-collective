import type { ComponentType } from "react";

import { FourTwentyBanner } from "./4-20-banner";
import { ChristmasBanner } from "./christmas-banner";
import { CloneBanner } from "./clone-banner";
import { MemorialDayBanner } from "./memorial-day-banner";
import { MothersDayBanner } from "./mothers-day-banner";
import { FathersDayBanner } from "./fathers-day-banner";
import { NewYearBanner } from "./new-year-banner";
import { NewsletterBanner } from "./newsletter-banner";
import { SnapchatBanner } from "./snapchat-banner";
import { StPatricksBanner } from "./st-patricks-banner";
import { StiiizyBanner } from "./stiiizy-banner";
import { TrapTakeoverBanner } from "./trap-takeover-banner";
import { SevenTenSaleBanner } from "./710-sale-banner/index";

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
    active: false,
    props: {
      bannerText: "Trap Takeover Sale",
      bannerSubText: "July 18th 12-6PM",
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
      {bannerConfig.map(({ Component, active, props }) => {
        return <Component key={Component.name} {...props} active={active} />;
      })}
    </>
  );
};
