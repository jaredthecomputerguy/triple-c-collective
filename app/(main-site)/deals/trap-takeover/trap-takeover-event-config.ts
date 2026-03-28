import { z } from "zod";
import { Temporal } from "@js-temporal/polyfill";

import { getFeaturedBrands } from "@/app/_components/trap-takeover/trap-takeover-brands";
import { getTrapTakeoverDateWithSuffix } from "@/lib/utils/server";

const TIME_ZONE = "America/Los_Angeles";

const eventDateSchema = z
  .object({
    year: z.number().min(1900).max(2100),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31)
  })
  .refine(
    ({ year, month, day }) => {
      const FRIDAY = 5;
      try {
        const date = new Temporal.PlainDate(year, month, day);
        return date.dayOfWeek === FRIDAY;
      } catch {
        return false;
      }
    },
    { message: "Date must be a valid Friday" }
  );

const parsedDate = eventDateSchema.parse({
  year: 2026,
  month: 4,
  day: 3
});

const eventPlainDate = new Temporal.PlainDate(
  parsedDate.year,
  parsedDate.month,
  parsedDate.day
);

const eventDate = new Date(
  eventPlainDate.toZonedDateTime({
    timeZone: TIME_ZONE,
    plainTime: new Temporal.PlainTime(12, 0)
  }).epochMilliseconds
);

const fileNameFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  month: "2-digit",
  day: "2-digit",
  year: "2-digit"
});

const readableDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  weekday: "short",
  month: "long",
  day: "numeric",
  year: "numeric"
});

function formatDateForFile(date: Date, fileType: "png" | "pdf"): string {
  const filePrefix = fileNameFormatter.format(date).replaceAll("/", "");
  const year = parsedDate.year;
  const month = String(parsedDate.month).padStart(2, "0");

  return `/images/trap-takeover/${year}/${month}/${filePrefix}-flyer.${fileType}`;
}

export const event: TrapTakeoverEventConfig = {
  date: eventDate,
  dateString: readableDateFormatter.format(eventDate),
  dateWithSuffix: getTrapTakeoverDateWithSuffix(eventDate),
  flyer: {
    image: formatDateForFile(eventDate, "png"),
    pdf: formatDateForFile(eventDate, "pdf")
  },
  featuredBrands: getFeaturedBrands(
    "Midsfactory",
    "Park Jams",
    "High 90's",
    "Together Canna Supply",
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
