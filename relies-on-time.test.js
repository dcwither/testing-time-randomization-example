import { isToday, today, isInPast } from "./relies-on-time";

describe("relies-on-time#isToday", () => {
  it("should return true for today", () => {
    jest.setSystemTime(new Date('2020-11-20T00:00:00.000Z'));
    expect(isToday(new Date('2020-11-20T10:10:05.000Z'))).toBe(
      true
    );
  });

  it("should return false for any other day", () => {
    jest.setSystemTime(new Date('2020-11-20T00:00:00.000Z'));
    // Tomorrow
    expect(isToday(new Date('2020-11-21T10:10:05.000Z'))).toBe(
      false
    );
    // Same Day, last year
    expect(isToday(new Date('2019-11-20T10:10:05.000Z'))).toBe(
      false
    );
  });
});

describe("relies-on-time#today", () => {
  it("should return the string matching today", () => {
    jest.setSystemTime(new Date('2020-11-20T00:00:00.000Z'));
    expect(today()).toBe("Fri Nov 20 2020");

    jest.setSystemTime(new Date('2020-12-15T00:00:00.000Z'));
    expect(today()).toBe("Tue Dec 15 2020");
  });
});


describe("relies-on-time#isInPast", () => {
  it("should return false for dates in the future", () => {
    jest.setSystemTime(new Date('2020-11-20T00:00:00.000Z'));
    expect(isInPast(new Date('2020-12-31T00:00:00.000Z'))).toBe(false);
  });

  it("should return true for dates in the past", () => {
    jest.setSystemTime(new Date('2020-11-20T00:00:00.000Z'));
    expect(isInPast(new Date('2020-10-20T00:00:00.000Z'))).toBe(true);
  });
});
