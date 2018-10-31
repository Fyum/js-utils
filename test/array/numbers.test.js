import numbers from '../../src/array/numbers';

describe('given we want an array of numbers from 3 to 10', () => {
  const input = {
    from: 3,
    to: 10,
  };

  test('it should return the array from 3 to 10', () => {
    const actual = 
      numbers(input);
    
    const expected = [
      3, 4, 5, 6, 7, 8, 9, 10,
    ];

    expect(actual)
      .toEqual(expected);
  });
});