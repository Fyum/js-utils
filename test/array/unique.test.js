import unique from '../../src/array/unique';

describe('given an array of numbers with duplicates', () => {
  const array = [
    1, 1, 2, 2,
  ];

  test('it should remove the duplicates', () => {
    const actual =
      unique(array);

    const expected = [
      1, 2,
    ];

    expect(actual)
      .toEqual(expected);
  });
});