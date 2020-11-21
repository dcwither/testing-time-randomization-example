import { isToday, today, isInPast } from "./relies-on-time";

describe("relies-on-time#isToday", () => {
  it("returns true for today", () => {
    jest.setSystemTime(new Date(2020, 10, 20));
    expect(isToday(new Date(2020, 10, 20, 10, 10, 5))).toBe(
      true
    );
  });
});

describe("relies-on-time#today", () => {
  it("returns the string matching today", () => {
    jest.setSystemTime(new Date(2020, 10, 20));
    expect(today()).toBe("Fri Nov 20 2020");
  });
});


describe("relies-on-time#isInPast", () => {

  it("should return false for dates in the future", () => {
    jest.setSystemTime(new Date(2020, 10, 20));
    expect(isInPast(new Date(2020, 11, 20))).toBe(false);
  });

  it("should return true for dates in the past", () => {
    jest.setSystemTime(new Date(2020, 10, 20));
    expect(isInPast(new Date(2020, 9, 20))).toBe(true);
  });
});