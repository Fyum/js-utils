import day from '../../src/date/day';

describe('given a number representing a day', () => {
  const number =
    2;

  test('it should return the day details', () => {
    const actual =
      day(number);

    const expected = {
      name: 'Tuesday',
      shortName: 'Tue',
      number: 2,
    };

    expect(actual)
      .toEqual(expected);
  });
});