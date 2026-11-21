import { trapTakeoverEvent } from "@/app/(main-site)/deals/trap-takeover/trap-takeover-event-config";
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

const DEFAULT_ORDER = Order.First;

function generateBanner<T extends ComponentTypeWithAny>(
  entry: BannerEntry<T>,
): AnyBanner {
  return {
    active: false,
    order: DEFAULT_ORDER,
    props: {},
    ...entry,
  };
}

const bannerConfig = [
  generateBanner({ Component: GenericBanner }),
  generateBanner({
    Component: TrapTakeoverBanner,
    active: false,
    order: Order.Second,
    props: {
      bannerText: "Trap Takeover Sale",
      bannerSubText: `${trapTakeoverEvent.dateString} | 12-6PM`,
      today: false,
      mini: true,
    },
  }),
  generateBanner({
    Component: StiiizyBanner,
    active: true,
    order: Order.First,
  }),
  generateBanner({ Component: CloneBanner }),
  generateBanner({ Component: FourTwentyBanner }),
  generateBanner({ Component: ChristmasBanner }),
  generateBanner({ Component: MemorialDayBanner }),
  generateBanner({ Component: LaborDayBanner }),
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
  const ordered = [...bannerConfig].toSorted(
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
