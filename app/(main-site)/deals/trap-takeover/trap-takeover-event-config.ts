import { getFeaturedBrands } from "@/app/_components/trap-takeover/trap-takeover-brands";
import {
  formatAndValidateDate,
  getTrapTakeoverDateWithSuffix
} from "@/lib/utils/server";

const dateString = formatAndValidateDate({
  year: 2026,
  month: 3,
  day: 27
});

const date = new Date(dateString);

export const event: TrapTakeoverEventConfig = {
  date: new Date(dateString),
  dateString,
  dateWithSuffix: getTrapTakeoverDateWithSuffix(date),
  flyer: {
    image: "/images/trap-takeover/2026/03/032726-flyer.png",
    pdf: "/images/trap-takeover/2026/03/032726-flyer.pdf"
  },
  featuredBrands: getFeaturedBrands(
    "Akwaaba",
    "High 90's",
    "Midsfactory",
    "Big Boy Dro",
    "Park Jams",
    "Sweetleaf Collective"
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
