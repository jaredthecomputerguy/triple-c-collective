import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 4,
  day: 10,
  featuredBrands: [
    "Dompen",
    "Chameleon Craft",
    "Hashtag",
    "Koa Cannabis Co.",
    "Sweetleaf Collective"
  ],
  flags: {
    featuredBrands: true,
    flyer: true
  }
};

export const event = createTrapTakeoverEvent(eventData);
