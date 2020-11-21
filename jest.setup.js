function randomDate(start, end) {
  // Source: https://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
  return new Date(
    start.getTime() +
      Math.random() * (end.getTime() - start.getTime())
  );
}

beforeEach(() => {
  jest.useFakeTimers("modern");
  // Pick a reasonable range between some time in the past to the somewhat distant future
  // https://jestjs.io/docs/en/jest-object#jestsetsystemtimenow-number--date
  jest.setSystemTime(
    randomDate(new Date(2000, 0, 1), new Date(2040, 0, 1))
  );
});

// Source: https://testing-library.com/docs/using-fake-timers/
// Running all pending timers and switching to real timers
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
