import {
  afterEach,
  beforeEach,
  expect,
  describe,
  setSystemTime,
  test,
  vi,
  beforeAll,
  afterAll,
} from "bun:test";

import {
  getTimeRemainingUntilNextFriday,
  getTimeRemainingUntilFourTwenty,
} from "@/lib/utils/server";

enum Month {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

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
function utcDate({
  year,
  month,
  day,
  hour = 0,
  minute = 0,
}: {
  year: number;
  month: Month;
  day: number;
  hour?: number;
  minute?: number;
}) {
  return new Date(Date.UTC(year, month, day, hour, minute));
}

/**
 * Wrapper so all calls use UTC explicitly.
 */
function run(now: Date) {
  return getTimeRemainingUntilNextFriday(now, { timeZone: "UTC" });
}

/**
 * Wrapper for Pacific-time-based tests.
 */
function runPST(now: Date) {
  return getTimeRemainingUntilNextFriday(now, {
    timeZone: "America/Los_Angeles",
  });
}

const SALE_LIVE = {
  Days: "--",
  Hours: "--",
  Minutes: "--",
  Seconds: "--",
};

describe("getTimeRemainingUntilNextFriday", () => {
  test("Monday → upcoming Friday same week", () => {
    // Mon Jan 1, 2024 12:00 UTC → Fri Jan 5, 2024 12:00 UTC
    setSystemTime(
      utcDate({ year: 2024, month: Month.January, day: 1, hour: 12 }),
    );

    expect(run(new Date())).toEqual({
      Days: "04",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("Thursday night → Friday noon", () => {
    // Thu Jan 4, 2024 18:00 UTC → Fri Jan 5, 2024 12:00 UTC
    setSystemTime(
      utcDate({
        year: 2024,
        month: Month.January,
        day: 4,
        hour: 18,
      }),
    );

    expect(run(new Date())).toEqual({
      Days: "00",
      Hours: "18",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("Friday morning before sale time → same day Friday", () => {
    // Fri Jan 5, 2024 09:00 UTC → Fri Jan 5, 2024 12:00 UTC
    setSystemTime(
      utcDate({
        year: 2024,
        month: Month.January,
        day: 5,
        hour: 9,
      }),
    );

    expect(run(new Date())).toEqual({
      Days: "00",
      Hours: "03",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("Exactly Friday at 12:00 UTC → sale is live", () => {
    setSystemTime(
      utcDate({
        year: 2024,
        month: Month.January,
        day: 5,
        hour: 12,
      }),
    );

    expect(run(new Date())).toEqual(SALE_LIVE);
  });

  test("Friday during sale → sale is live", () => {
    // Fri Jan 5, 2024 17:59 UTC
    setSystemTime(
      utcDate({
        year: 2024,
        month: Month.January,
        day: 5,
        hour: 17,
        minute: 59,
      }),
    );

    expect(run(new Date())).toEqual(SALE_LIVE);
  });

  test("Friday at 18:00 UTC → next Friday", () => {
    // Fri Jan 5, 2024 18:00 UTC → Fri Jan 12, 2024 12:00 UTC
    setSystemTime(
      utcDate({
        year: 2024,
        month: Month.January,
        day: 5,
        hour: 18,
      }),
    );

    expect(run(new Date())).toEqual({
      Days: "06",
      Hours: "18",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("Sunday → next Friday", () => {
    // Sun Jan 7, 2024 12:00 UTC → Fri Jan 12, 2024 12:00 UTC
    setSystemTime(
      utcDate({
        year: 2024,
        month: Month.January,
        day: 7,
        hour: 12,
      }),
    );

    expect(run(new Date())).toEqual({
      Days: "05",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("End of year rollover", () => {
    // Sun Dec 31, 2023 12:00 UTC → Fri Jan 5, 2024 12:00 UTC
    setSystemTime(
      utcDate({
        year: 2023,
        month: Month.December,
        day: 31,
        hour: 12,
      }),
    );

    expect(run(new Date())).toEqual({
      Days: "05",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("Leap year Feb 29 → next Friday", () => {
    // Thu Feb 29, 2024 12:00 UTC → Fri Mar 1, 2024 12:00 UTC
    setSystemTime(
      utcDate({
        year: 2024,
        month: Month.February,
        day: 29,
        hour: 12,
      }),
    );

    expect(run(new Date())).toEqual({
      Days: "01",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    });
  });

  describe("Pacific-time sale window", () => {
    test("Friday at 11:59 AM PST → counts down to noon", () => {
      // Nov 27, 2026 19:59 UTC = 11:59 AM PST
      setSystemTime(
        utcDate({
          year: 2026,
          month: Month.November,
          day: 27,
          hour: 19,
          minute: 59,
        }),
      );

      expect(runPST(new Date())).toEqual({
        Days: "00",
        Hours: "00",
        Minutes: "01",
        Seconds: "00",
      });
    });

    test("Friday at 12:00 PM PST → sale is live", () => {
      // Nov 27, 2026 20:00 UTC = 12:00 PM PST
      setSystemTime(
        utcDate({
          year: 2026,
          month: Month.November,
          day: 27,
          hour: 20,
        }),
      );

      expect(runPST(new Date())).toEqual(SALE_LIVE);
    });

    test("Friday at 12:10 PM PST → sale is live", () => {
      // Nov 27, 2026 20:10 UTC = 12:10 PM PST
      setSystemTime(
        utcDate({
          year: 2026,
          month: Month.November,
          day: 27,
          hour: 20,
          minute: 10,
        }),
      );

      expect(runPST(new Date())).toEqual(SALE_LIVE);
    });

    test("Friday at 5:53 PM PST → sale is live", () => {
      // Nov 28, 2026 01:53 UTC = 5:53 PM PST on Nov 27
      setSystemTime(
        utcDate({
          year: 2026,
          month: Month.November,
          day: 28,
          hour: 1,
          minute: 53,
        }),
      );

      expect(runPST(new Date())).toEqual(SALE_LIVE);
    });

    test("Friday at 5:59 PM PST → sale is still live", () => {
      // Nov 28, 2026 01:59 UTC = 5:59 PM PST on Nov 27
      setSystemTime(
        utcDate({
          year: 2026,
          month: Month.November,
          day: 28,
          hour: 1,
          minute: 59,
        }),
      );

      expect(runPST(new Date())).toEqual(SALE_LIVE);
    });

    test("Friday at 6:00 PM PST → countdown resumes for next Friday", () => {
      // Nov 28, 2026 02:00 UTC = 6:00 PM PST on Nov 27
      // Next Friday is Dec 4, 2026 at noon PST.
      setSystemTime(
        utcDate({
          year: 2026,
          month: Month.November,
          day: 28,
          hour: 2,
        }),
      );

      expect(runPST(new Date())).toEqual({
        Days: "06",
        Hours: "18",
        Minutes: "00",
        Seconds: "00",
      });
    });
  });
});

function run420(now: Date) {
  return getTimeRemainingUntilFourTwenty(now, { timeZone: "UTC" });
}

describe("getTimeRemainingUntilFourTwenty", () => {
  test("day before 4/20 → counts down to April 20 at 10:00", () => {
    // Apr 19, 2026 10:00 UTC → Apr 20, 2026 10:00 UTC
    setSystemTime(
      utcDate({
        year: 2026,
        month: Month.April,
        day: 19,
        hour: 10,
      }),
    );

    expect(run420(new Date())).toEqual({
      Days: "01",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("morning of 4/20 before 10:00 → counts down to same day 10:00", () => {
    // Apr 20, 2026 09:30 UTC → Apr 20, 2026 10:00 UTC
    setSystemTime(
      utcDate({
        year: 2026,
        month: Month.April,
        day: 20,
        hour: 9,
        minute: 30,
      }),
    );

    expect(run420(new Date())).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "30",
      Seconds: "00",
    });
  });

  test("exactly at 4/20 10:00 → returns zeroes", () => {
    setSystemTime(
      utcDate({
        year: 2026,
        month: Month.April,
        day: 20,
        hour: 10,
      }),
    );

    expect(run420(new Date())).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("during live window in afternoon → returns zeroes", () => {
    // Apr 20, 2026 15:45 UTC
    setSystemTime(
      utcDate({
        year: 2026,
        month: Month.April,
        day: 20,
        hour: 15,
        minute: 45,
      }),
    );

    expect(run420(new Date())).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("exactly at end of live window 21:30 → returns zeroes", () => {
    setSystemTime(
      utcDate({
        year: 2026,
        month: Month.April,
        day: 20,
        hour: 21,
        minute: 30,
      }),
    );

    expect(run420(new Date())).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    });
  });

  test("just before live window starts → still counts down", () => {
    // Apr 20, 2026 09:59 UTC → Apr 20, 2026 10:00 UTC
    setSystemTime(
      utcDate({
        year: 2026,
        month: Month.April,
        day: 20,
        hour: 9,
        minute: 59,
      }),
    );

    expect(run420(new Date())).toEqual({
      Days: "00",
      Hours: "00",
      Minutes: "01",
      Seconds: "00",
    });
  });

  test("custom target time works before the window", () => {
    // Target is Apr 20 at 12:30 UTC
    setSystemTime(
      utcDate({
        year: 2026,
        month: Month.April,
        day: 20,
        hour: 11,
      }),
    );

    const result = getTimeRemainingUntilFourTwenty(new Date(), {
      timeZone: "UTC",
      hour: 12,
      minute: 30,
    });

    expect(result).toEqual({
      Days: "00",
      Hours: "01",
      Minutes: "30",
      Seconds: "00",
    });
  });

  test("earlier in the year → counts down to this year's 4/20", () => {
    // Jan 1, 2026 00:00 UTC → Apr 20, 2026 10:00 UTC
    setSystemTime(
      utcDate({
        year: 2026,
        month: Month.January,
        day: 1,
      }),
    );

    expect(run420(new Date())).toEqual({
      Days: "109",
      Hours: "10",
      Minutes: "00",
      Seconds: "00",
    });
  });
});
