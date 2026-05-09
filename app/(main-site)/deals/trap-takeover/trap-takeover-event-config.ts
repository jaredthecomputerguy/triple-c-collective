import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 5,
  day: 15,
  featuredBrands: [
    "High 90's",
    "Chameleon Craft",
    "Dompen",
    "Koa Cannabis Co.",
    "Sweetleaf Collective",
  ],
  flags: {
    featuredBrands: true,
    flyer: true,
  },
};

export const event = createTrapTakeoverEvent(eventData);
