import { getFeaturedBrands } from "@/app/_components/trap-takeover/trap-takeover-brands";
import {
  formatAndValidateDate,
  getTrapTakeoverDateWithSuffix
} from "@/lib/utils/server";

const dateString = formatAndValidateDate({
  year: 2026,
  month: 3,
  day: 20
});

const date = new Date(dateString);

export const event: TrapTakeoverEventConfig = {
  date,
  dateString,
  dateWithSuffix: getTrapTakeoverDateWithSuffix(date),
  flyer: {
    image: "/images/trap-takeover/2026/03/032026-flyer.png",
    // TODO: Make sure to update this too
    pdf: "/images/trap-takeover/2026/03/032026-flyer.pdf"
  },
  featuredBrands: getFeaturedBrands(
    "Chameleon Craft",
    "Koa Cannabis Co.",
    "Dompen",
    "Park Jams",
    "Midsfactory",
    "Akwaaba"
  ),
  flags: {
    featuredBrands: true,
    flyer: true,
    giftBags: false,
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false
  }
};

type TrapTakeoverEventConfig = {
  date: Date;
  dateString: string;
  dateWithSuffix: string;
  flyer: {
    image: string;
    pdf: string;
  };
  featuredBrands: ReturnType<typeof getFeaturedBrands>;
  flags: {
    featuredBrands: boolean;
    flyer: boolean;
    giftBags: boolean;
    freeFood: boolean;
    specialArtPromo: boolean;
    specialPromo: boolean;
    video: boolean;
    individualDeals: boolean;
  };
};
