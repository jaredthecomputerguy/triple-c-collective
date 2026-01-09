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
  formatAndValidateDate
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
