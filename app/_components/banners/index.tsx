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


type PropsOf<T> = T extends ComponentType<infer P> ? P : never;

type BannerEntry<T extends ComponentType<any>> = {
  Component: T;
  active: boolean;
  props?: Partial<PropsOf<T>>;
};

// This is just for visual clarity
const TRUE = true;
const FALSE = false;

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
  BannerEntry<typeof SnapchatBanner>,
  BannerEntry<typeof StPatricksBanner>,
] = [
  {
    Component: TrapTakeoverBanner,
    active: FALSE,
    props: { bannerText: "Trap Takeover - TODAY @ 12-6PM" },
  },
  {
    Component: StiiizyBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: CloneBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: FourTwentyBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: ChristmasBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: MemorialDayBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: MothersDayBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: FathersDayBanner,
    active: TRUE,
    props: {},
  },
  {
    Component: NewYearBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: NewsletterBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: SnapchatBanner,
    active: FALSE,
    props: {},
  },
  {
    Component: StPatricksBanner,
    active: FALSE,
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
