import { getFeaturedBrands } from "@/app/_components/trap-takeover/trap-takeover-brands";
import {
  formatAndValidateDate,
  getTrapTakeoverDateWithSuffix
} from "@/lib/utils/server";

const dateString = formatAndValidateDate({
  year: 2026,
  month: 3,
  day: 13
});

const date = new Date(dateString);

/* BOGO deals on High 90s!!!
BOGO deals on Mids Factory!!!
BOGO deals on Together Canna Supply!!!
BOGO deals on Elevens gummies!!!
 * */

export const event: TrapTakeoverEventConfig = {
  date,
  dateString,
  dateWithSuffix: getTrapTakeoverDateWithSuffix(date),
  flyer: {
    image: "/images/trap-takeover/2026/03/031326-flyer.png",
    pdf: "/images/trap-takeover/2026/03/031326-flyer.pdf"
  },
  featuredBrands: getFeaturedBrands(
    "Akwaaba",
    "High 90's",
    "Midsfactory",
    "Together Canna Supply",
    "Park Jams"
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
