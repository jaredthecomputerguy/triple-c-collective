import {
  afterEach,
  beforeEach,
  expect,
  describe,
  setSystemTime,
  test,
  vi,
  beforeAll,
  afterAll
} from "bun:test";

import {
  getTimeRemainingUntilNextFriday,
  getTimeRemainingUntilFourTwenty
} from "@/lib/utils/server";

beforeAll(() => {
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  vi.restoreAllMocks();
});

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

/**
 * Construct a Date in UTC (so test inputs are stable everywhere).
 */
function utcDate(
  year: number,
  month: number,
  day: number,
  hour = 0,
  minute = 0
) {
  return new Date(Date.UTC(year, month, day, hour, minute));
}

/**
 * Wrapper so all calls use UTC explicitly.
 */
function run(now: Date) {
  return getTimeRemainingUntilNextFriday(now, { timeZone: "UTC" });
}

describe("getTimeRemainingUntilNextFriday", () => {
  test("Monday → upcoming Friday same week", () => {
    // Mon Jan 1, 2024 12:00 UTC → Fri Jan 5, 2024 12:00 UTC
    setSystemTime(utcDate(2024, 0, 1, 12));
    const result = run(new Date());

    expect(result).toEqual({
      Days: "04",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("Thursday night → Friday noon", () => {
    // Thu Jan 4, 2024 18:00 → Fri Jan 5, 2024 12:00
    setSystemTime(utcDate(2024, 0, 4, 18));
    const result = run(new Date());

    expect(result).toEqual({
      Days: "00",
      Hours: "18",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("Exactly Friday at 12:00 → rolls to next Friday", () => {
    // Fri Jan 5, 2024 12:00 → Fri Jan 12, 2024 12:00
    setSystemTime(utcDate(2024, 0, 5, 12));
    const result = run(new Date());

    expect(result).toEqual({
      Days: "07",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("Friday morning before sale time → same day Friday", () => {
    // Fri Jan 5, 2024 09:00 → Fri Jan 5, 2024 12:00
    setSystemTime(utcDate(2024, 0, 5, 9));
    const result = run(new Date());

    expect(result).toEqual({
      Days: "00",
      Hours: "03",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("Friday evening after sale time → next Friday", () => {
    // Fri Jan 5, 2024 18:00 → Fri Jan 12, 2024 12:00
    setSystemTime(utcDate(2024, 0, 5, 18));
    const result = run(new Date());

    expect(result).toEqual({
      Days: "06",
      Hours: "18",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("Sunday → next Friday", () => {
    // Sun Jan 7, 2024 12:00 → Fri Jan 12, 2024 12:00
    setSystemTime(utcDate(2024, 0, 7, 12));
    const result = run(new Date());

    expect(result).toEqual({
      Days: "05",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("End of year rollover", () => {
    // Sun Dec 31, 2023 12:00 → Fri Jan 5, 2024 12:00
    setSystemTime(utcDate(2023, 11, 31, 12));
    const result = run(new Date());

    expect(result).toEqual({
      Days: "05",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("Leap year Feb 29 → next Friday", () => {
    // Thu Feb 29, 2024 12:00 → Fri Mar 1, 2024 12:00
    setSystemTime(utcDate(2024, 1, 29, 12));
    const result = run(new Date());

    expect(result).toEqual({
      Days: "01",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });
});

describe("getTimeRemainingUntilFourTwenty", () => {
  function run420(now: Date) {
    return getTimeRemainingUntilFourTwenty(now, { timeZone: "UTC" });
  }

  test("day before 4/20 → counts down to April 20 at 10:00", () => {
    // Apr 19, 2026 10:00 UTC → Apr 20, 2026 10:00 UTC
    setSystemTime(utcDate(2026, 3, 19, 10));
    const result = run420(new Date());

    expect(result).toEqual({
      Days: "01",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("morning of 4/20 before 10:00 → counts down to same day 10:00", () => {
    // Apr 20, 2026 09:30 UTC → Apr 20, 2026 10:00 UTC
    setSystemTime(utcDate(2026, 3, 20, 9, 30));
    const result = run420(new Date());

    expect(result).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "30",
      Seconds: "00"
    });
  });

  test("exactly at 4/20 10:00 → returns zeroes", () => {
    setSystemTime(utcDate(2026, 3, 20, 10, 0));
    const result = run420(new Date());

    expect(result).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("during live window in afternoon → returns zeroes", () => {
    // Apr 20, 2026 15:45 UTC
    setSystemTime(utcDate(2026, 3, 20, 15, 45));
    const result = run420(new Date());

    expect(result).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("exactly at end of live window 21:30 → returns zeroes", () => {
    setSystemTime(utcDate(2026, 3, 20, 21, 30));
    const result = run420(new Date());

    expect(result).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00"
    });
  });

  test("just before live window starts → still counts down", () => {
    // Apr 20, 2026 09:59 UTC → Apr 20, 2026 10:00 UTC
    setSystemTime(utcDate(2026, 3, 20, 9, 59));
    const result = run420(new Date());

    expect(result).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "01",
      Seconds: "00"
    });
  });

  test("custom target time works before the window", () => {
    // Target is Apr 20 at 12:30 UTC
    setSystemTime(utcDate(2026, 3, 20, 11, 0));
    const result = getTimeRemainingUntilFourTwenty(new Date(), {
      timeZone: "UTC",
      hour: 12,
      minute: 30
    });

    expect(result).toEqual({
      Days: "00",
      Hours: "01",
      Minutes: "30",
      Seconds: "00"
    });
  });

  test("earlier in the year → counts down to this year's 4/20", () => {
    // Jan 1, 2026 00:00 UTC → Apr 20, 2026 10:00 UTC
    setSystemTime(utcDate(2026, 0, 1, 0, 0));
    const result = run420(new Date());

    expect(result).toEqual({
      Days: "109",
      Hours: "10",
      Minutes: "00",
      Seconds: "00"
    });
  });
});
