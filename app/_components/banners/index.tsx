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
import { GenericBanner } from "@/app/_components/banners/generic-banner";

type PropsOf<T> = T extends ComponentType<infer P> ? P : never;

type BannerEntry<T extends ComponentType<any>> = {
  Component: T;
  active: boolean;
  /** Lower number = higher on the page */
  order?: number;
  props?: Partial<PropsOf<T>>;
};

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
    order: 2,
    props: {
      children: (
        <div className="mr-4 text-center text-[#fefefe]">
          <span className="text-xs uppercase md:text-sm">
            NOW ACCEPTING CREDIT CARDS &amp; TAP TO PAY
          </span>
        </div>
      ),
      className: "py-2 font-bold text-white uppercase px-4 bg-primary-purple ",
      closeBtnClass: "text-white",
    },
  },
  {
    Component: TrapTakeoverBanner,
    active: true,
    order: 1,
    props: {
      bannerText: "Trap Takeover Sale",
      bannerSubText: "LIVE TODAY | 12-6PM",
    },
  },
  { Component: StiiizyBanner, active: false, order: 50, props: {} },
  { Component: CloneBanner, active: false, order: 50, props: {} },
  { Component: FourTwentyBanner, active: false, order: 50, props: {} },
  { Component: ChristmasBanner, active: false, order: 50, props: {} },
  { Component: MemorialDayBanner, active: false, order: 50, props: {} },
  { Component: MothersDayBanner, active: false, order: 50, props: {} },
  { Component: FathersDayBanner, active: false, order: 50, props: {} },
  { Component: NewYearBanner, active: false, order: 50, props: {} },
  { Component: NewsletterBanner, active: false, order: 50, props: {} },
  { Component: SevenTenSaleBanner, active: false, order: 50, props: {} },
  { Component: SnapchatBanner, active: false, order: 50, props: {} },
  { Component: StPatricksBanner, active: false, order: 50, props: {} },
];

export const Banner = () => {
  // Stable sort: by `order`, then by original index
  const ordered = bannerConfig
    .map((entry, idx) => [entry, idx] as const)
    .sort((a, b) => {
      const ao = a[0].order ?? Infinity;
      const bo = b[0].order ?? Infinity;
      return ao === bo ? a[1] - b[1] : ao - bo;
    })
    .map(([entry]) => entry);

  return (
    <>
      {ordered.map(({ Component, active, props }) => (
        <Component key={Component.name} {...props} active={active} />
      ))}
    </>
  );
};
