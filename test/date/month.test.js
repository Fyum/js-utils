import month from '../../src/date/month';

describe('given an existing month number', () => {
  const number = 4;

  test('it should return the month details', () => {
    const actual =
      month(number);

    const expected = {
      name: 'April',
      shortName: 'Apr',
      number: 4,
      days: 30,
      daysOnLeapYear: 30,
    };

    expect(actual)
      .toEqual(expected);

  });
});


describe('given a non existing month number', () => {
  const number = 14;

  test('it should return undefined', () => {
    const actual =
      month(number);

    const expected =
      undefined;

    expect(actual)
      .toEqual(expected);
  });
});