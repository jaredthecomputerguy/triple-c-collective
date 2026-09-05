import {
  TrapTakeoverBanner,
  StiiizyBanner,
  CloneBanner,
  FourTwentyBanner,
  ChristmasBanner,
  MemorialDayBanner,
  LaborDayBanner,
  MothersDayBanner,
  FathersDayBanner,
  NewYearBanner,
  NewsletterBanner,
  SevenTenSaleBanner,
  SnapchatBanner,
  StPatricksBanner,
  HalloweenBanner,
  GenericBanner,
  ThanksgivingBanner,
  BestOfLakeAndMendocinoWinnerBanner,
} from "@/app/_components/banners";
import Link from "next/link";

enum Order {
  First = 0,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
  Ninth,
  Tenth,
}

const DEFAULT_ORDER = 0;

function generateBanner<T extends ComponentTypeWithAny>(
  entry: BannerEntry<T>,
): BannerEntry<T> {
  return {
    active: false,
    order: DEFAULT_ORDER,
    props: {},
    ...entry,
  };
}

const bannerConfig = [
  generateBanner({
    Component: GenericBanner,
    active: false,
    order: Order.First,
    props: {
      children: (
        <div className="text-[#050505]">
          <Link
            href="/deals"
            className="flex flex-col items-center justify-center gap-1 px-4 py-3 text-center text-[#fefefe] transition hover:underline md:text-xl">
            LABOR DAY WEEKEND SALE
          </Link>
        </div>
      ),
      className:
        "relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-2 font-bold text-white uppercase",
      closeBtnClass: "text-white",
    },
  }),
  generateBanner({
    Component: TrapTakeoverBanner,
    active: false,
    order: Order.Second,
    props: {
      bannerText: "Trap Takeover Sale",
      bannerSubText: "TODAY | 12-6PM",
      today: false,
      mini: true,
    },
  }),
  generateBanner({
    Component: StiiizyBanner,
    active: false,
    order: Order.Second,
  }),
  generateBanner({ Component: CloneBanner }),
  generateBanner({ Component: FourTwentyBanner }),
  generateBanner({ Component: ChristmasBanner }),
  generateBanner({ Component: MemorialDayBanner }),
  generateBanner({ Component: LaborDayBanner, active: true }),
  generateBanner({ Component: MothersDayBanner }),
  generateBanner({ Component: FathersDayBanner }),
  generateBanner({ Component: NewYearBanner }),
  generateBanner({ Component: NewsletterBanner }),
  generateBanner({ Component: SevenTenSaleBanner }),
  generateBanner({ Component: SnapchatBanner }),
  generateBanner({ Component: StPatricksBanner }),
  generateBanner({ Component: HalloweenBanner }),
  generateBanner({ Component: ThanksgivingBanner }),
  generateBanner({ Component: BestOfLakeAndMendocinoWinnerBanner }),
] as const;

export const Banners = () => {
  const ordered = [...bannerConfig].sort(
    (a, b) => (a.order ?? DEFAULT_ORDER) - (b.order ?? DEFAULT_ORDER),
  );

  return (
    <>
      {ordered.map(({ Component, active, props }) => (
        <Component key={Component.name} {...props} active={active ?? false} />
      ))}
    </>
  );
};
