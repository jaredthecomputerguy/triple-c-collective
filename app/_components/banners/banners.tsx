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

type PropsOf<T> = T extends ComponentType<infer P> ? P : never;

// biome-ignore lint/suspicious/noExplicitAny: I want to be able to use any component
interface BannerEntry<T extends ComponentType<any> = ComponentType<any>> {
  Component: T;
  active?: boolean;
  /** Lower number = higher on the page */
  order?: number;
  props?: Partial<PropsOf<T>>;
}

const DEFAULT_ORDER = 50;

// biome-ignore lint/suspicious/noExplicitAny: I want to be able to use any component
const generateBanner = <T extends ComponentType<any>>(
  entry: BannerEntry<T>
): Required<BannerEntry<T>> => {
  return {
    active: false,
    order: DEFAULT_ORDER,
    props: {},
    ...entry
  };
};

const bannerConfig = [
  generateBanner({
    Component: GenericBanner,
    active: true,
    /** INFO: This is always order `1`, so that it's below the primary banner */
    order: 1,
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
    order: 0,
    props: {
      bannerText: "Trap Takeover Sale",
      bannerSubText: "TODAY | 12-6PM"
    }
  }),
  generateBanner({ Component: StiiizyBanner, active: true, order: 0 }),
  generateBanner({ Component: CloneBanner }),
  generateBanner({ Component: FourTwentyBanner }),
  generateBanner({ Component: ChristmasBanner }),
  generateBanner({ Component: MemorialDayBanner }),
  generateBanner({ Component: MothersDayBanner }),
  generateBanner({ Component: FathersDayBanner }),
  generateBanner({ Component: NewYearBanner }),
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
        <Component key={Component.name} {...props} active={active} />
      ))}
    </>
  );
};
