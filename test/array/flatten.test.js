import flatten from '../../src/array/flatten';

describe('given a nested array', () => {
  const array = [
    [1, 2],
    [3, 4], 
    [5, 6],
  ];

  test('it should flatten the array', () => {
    const actual =
      flatten(array);

    const expected = [
      1, 2, 3, 4, 5, 6,
    ];

    expect(actual)
      .toEqual(expected);

  });
});

describe('given a mutli nested array', () => {
  const array = [
    [1, 2, [1, 2]],
    [3, 4, [3, 4]], 
    [5, 6, [5, 6]],
  ];

  test('it should flatten the array', () => {
    const actual =
      flatten(array);

    const expected = [
      1, 2, 1, 2, 3, 4, 3, 4, 5, 6, 5, 6,
    ];

    expect(actual)
      .toEqual(expected);

  });
});