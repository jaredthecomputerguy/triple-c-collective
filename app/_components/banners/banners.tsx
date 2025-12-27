import type { ComponentType } from "react";

import {
  TrapTakeoverBanner,
  StiiizyBanner,
  CloneBanner,
  FourTwentyBanner,
  ChristmasBanner,
  MemorialDayBanner,
  MothersDayBanner,
  FathersDayBanner,
  NewYearBanner,
  NewsletterBanner,
  SevenTenSaleBanner,
  SnapchatBanner,
  StPatricksBanner,
  HalloweenBanner,
  GenericBanner,
  ThanksgivingBanner
} from "@/app/_components/banners/";

// biome-ignore lint/suspicious/noExplicitAny: I need the any here
type ComponentTypeWithAny = ComponentType<any>;

// Extract props from a React component
type PropsOf<T extends ComponentTypeWithAny> =
  T extends ComponentType<infer P> ? P : never;

// The core entry type
interface BannerEntry<T extends ComponentTypeWithAny> {
  Component: T;
  active?: boolean;
  order?: Order; // lower = higher priority
  props?: Partial<PropsOf<T>>;
}

enum Order {
  First = 0,
  Second = 1,
  Third = 2,
  Fourth = 3,
  Fifth = 4,
  Sixth = 5,
  Seventh = 6,
  Eighth = 7,
  Ninth = 8,
  Tenth = 9
}

const DEFAULT_ORDER = 0;

function generateBanner<T extends ComponentTypeWithAny>(
  entry: BannerEntry<T>
): BannerEntry<T> {
  return {
    active: false,
    order: DEFAULT_ORDER,
    props: {},
    ...entry
  };
}

const bannerConfig = [
  generateBanner({
    Component: GenericBanner,
    active: false,
    order: Order.Second,
    props: {
      children: (
        <div className="mr-4 text-center text-[#fefefe]">
          <span className="text-xs uppercase md:text-sm">
            NOW ACCEPTING CREDIT CARDS &amp; TAP TO PAY
          </span>
        </div>
      ),
      className: "py-2 font-bold text-white uppercase px-4 bg-primary-purple",
      closeBtnClass: "text-white"
    }
  }),
  generateBanner({
    Component: TrapTakeoverBanner,
    active: false,
    order: Order.Second,
    props: {
      bannerText: "Trap Takeover Sale",
      bannerSubText: "TODAY | 12-6PM"
    }
  }),
  generateBanner({
    Component: StiiizyBanner,
    active: true,
    order: Order.Second
  }),
  generateBanner({ Component: CloneBanner }),
  generateBanner({ Component: FourTwentyBanner }),
  generateBanner({ Component: ChristmasBanner }),
  generateBanner({ Component: MemorialDayBanner }),
  generateBanner({ Component: MothersDayBanner }),
  generateBanner({ Component: FathersDayBanner }),
  generateBanner({
    Component: NewYearBanner,
    active: true,
    order: Order.First
  }),
  generateBanner({ Component: NewsletterBanner }),
  generateBanner({ Component: SevenTenSaleBanner }),
  generateBanner({ Component: SnapchatBanner }),
  generateBanner({ Component: StPatricksBanner }),
  generateBanner({ Component: HalloweenBanner }),
  generateBanner({ Component: ThanksgivingBanner })
] as const;

export const Banners = () => {
  const ordered = [...bannerConfig].sort(
    (a, b) => (a.order ?? DEFAULT_ORDER) - (b.order ?? DEFAULT_ORDER)
  );

  return (
    <>
      {ordered.map(({ Component, active, props }) => (
        <Component key={Component.name} {...props} active={active ?? false} />
      ))}
    </>
  );
};
