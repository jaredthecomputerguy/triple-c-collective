import { Temporal } from "@js-temporal/polyfill";
import { Logger } from "@/lib/logger";

export function getDealImageUrl(deal: Deal) {
  return `${process.env.POCKETBASE_BASE_URL}${process.env.POCKETBASE_IMAGE_URL}/${deal.id}/${deal.image}`;
}

export function getTrapTakeoverDateWithSuffix(trapTakeoverDate: Date) {
  const formatOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  try {
    const formattedDate = new Intl.DateTimeFormat(
      "en-US",
      formatOptions,
    ).format(trapTakeoverDate);

    const day = trapTakeoverDate.getDate();
    let suffix: string;
    const lastDigit = day % 10;
    const lastTwoDigits = day % 100;
    if (lastDigit === 1 && lastTwoDigits !== 11) {
      suffix = "st";
      return formattedDate + suffix;
    }
    if (lastDigit === 2 && lastTwoDigits !== 12) {
      suffix = "nd";
      return formattedDate + suffix;
    }
    if (lastDigit === 3 && lastTwoDigits !== 13) {
      suffix = "rd";
      return formattedDate + suffix;
    }

    suffix = "th";
    return formattedDate + suffix;
  } catch (e) {
    Logger.error(e);
    throw e;
  }
}

const pad2 = (n: number) => String(n).padStart(2, "0");

const zeros = (): TimeRemainingUntilDate => ({
  Days: "00",
  Hours: "00",
  Minutes: "00",
  Seconds: "00",
});

/** Ensure we’re working with a ZonedDateTime; accept Date or ZonedDateTime */
function toZdtNow(
  now: Temporal.ZonedDateTime | Date,
  tz: string,
): Temporal.ZonedDateTime {
  if (now && typeof (now as Temporal.ZonedDateTime).toInstant === "function") {
    // already a ZonedDateTime
    return now as Temporal.ZonedDateTime;
  }
  // convert Date -> Instant -> ZDT in tz
  const inst = Temporal.Instant.from((now as Date).toISOString());
  return inst.toZonedDateTimeISO(tz);
}

/** Convert ms diff to DHMS strings */
function diffToDHMS(
  nowI: Temporal.Instant,
  targetI: Temporal.Instant,
): TimeRemainingUntilDate {
  const ms = targetI.epochMilliseconds - nowI.epochMilliseconds;
  if (ms <= 0) return zeros();

  const totalSeconds = Math.floor(ms / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);

  return {
    Days: pad2(days),
    Hours: pad2(totalHours % 24),
    Minutes: pad2(totalMinutes % 60),
    Seconds: pad2(totalSeconds % 60),
  };
}

/** Remaining time until next 1st or 3rd Friday (this/next month) at 12:00 local */
export function getTimeRemainingUntilNextFriday(
  nowInput: Temporal.ZonedDateTime | Date,
  opts?: { timeZone?: string; hour?: number; minute?: number },
): TimeRemainingUntilDate {
  const tz = opts?.timeZone ?? Temporal.Now.timeZoneId();
  const hour = opts?.hour ?? 12;
  const minute = opts?.minute ?? 0;

  const now = toZdtNow(nowInput, tz);

  // Temporal weekday: Monday = 1 ... Friday = 5 ... Sunday = 7
  const FRIDAY = 5;

  const daysUntilFriday = (FRIDAY - now.dayOfWeek + 7) % 7;

  let target = now.add({ days: daysUntilFriday }).with({
    hour,
    minute,
    second: 0,
    millisecond: 0,
  });

  // If it is already Friday and past the target time, go to next Friday
  if (
    target.toInstant().epochMilliseconds <= now.toInstant().epochMilliseconds
  ) {
    target = target.add({ days: 7 });
  }

  return diffToDHMS(now.toInstant(), target.toInstant());
}

/** Remaining time until April 20 @ 10:00 AM America/Los_Angeles */
export function getTimeRemainingUntilFourTwenty(
  nowInput: Temporal.ZonedDateTime | Date,
  opts?: { timeZone?: string; hour?: number; minute?: number },
): TimeRemainingUntilDate {
  const tz = opts?.timeZone ?? "America/Los_Angeles";
  const hour = opts?.hour ?? 10;
  const minute = opts?.minute ?? 0;

  const now = toZdtNow(nowInput, tz);

  const target = Temporal.ZonedDateTime.from({
    timeZone: tz,
    year: now.year,
    month: 4,
    day: 20,
    hour,
    minute,
  });

  const endOfPromoWindow = Temporal.ZonedDateTime.from({
    timeZone: tz,
    year: now.year,
    month: 4,
    day: 20,
    hour: 21,
    minute: 30,
  });

  if (
    Temporal.ZonedDateTime.compare(now, target) >= 0 &&
    Temporal.ZonedDateTime.compare(now, endOfPromoWindow) <= 0
  ) {
    return {
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    };
  }

  return diffToDHMS(now.toInstant(), target.toInstant());
}

/** True if `dateStr` is within `days` days before now in `timeZone` */
export function isDateLessThan(
  dateStr: string,
  days: number,
  timeZone: string = Temporal.Now.timeZoneId(),
): boolean {
  const nowI = Temporal.Now.instant();
  let inputI: Temporal.Instant;

  try {
    // ISO with Z or offset
    inputI = Temporal.Instant.from(dateStr);
  } catch {
    try {
      // date-time without zone
      const pdt = Temporal.PlainDateTime.from(dateStr);
      inputI = pdt.toZonedDateTime(timeZone).toInstant();
    } catch {
      // date-only
      const pd = Temporal.PlainDate.from(dateStr);
      const midnight = pd.toPlainDateTime(Temporal.PlainTime.from("00:00"));
      inputI = midnight.toZonedDateTime(timeZone).toInstant();
    }
  }

  const diffMs = nowI.epochMilliseconds - inputI.epochMilliseconds;
  const windowMs = days * 24 * 60 * 60 * 1000;
  return diffMs < windowMs;
}
