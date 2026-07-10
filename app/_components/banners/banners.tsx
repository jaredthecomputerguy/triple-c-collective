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
  ThanksgivingBanner,
  BestOfLakeAndMendocinoWinnerBanner,
} from "@/app/_components/banners";

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
        <div className="mr-4 text-center text-[#fefefe]">
          <span className="text-xs uppercase md:text-sm">
            NOW ACCEPTING CREDIT CARDS &amp; TAP TO PAY
          </span>
        </div>
      ),
      className: "py-2 font-bold text-white uppercase px-4 bg-primary-purple",
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
  generateBanner({ Component: MothersDayBanner }),
  generateBanner({ Component: FathersDayBanner }),
  generateBanner({ Component: NewYearBanner }),
  generateBanner({ Component: NewsletterBanner }),
  generateBanner({
    Component: SevenTenSaleBanner,
    active: true,
    order: Order.Third,
    props: {
      children: (
        <div className="flex flex-col items-center whitespace-nowrap">
          <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl pt-2">
            7/10 TRAP TAKEOVER SALE!
          </p>
          <p className="text-lg sm:text-xl md:text-2xl">TODAY - 12-6PM</p>
        </div>
      ),
      href: "/deals/trap-takeover",
    },
  }),
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
