import occurrences from '../../src/string/occurrences';

describe('given a text and a searched string', () => {

  const text = 'abc def ghi abc jkl mnoabc aabbc';

  const toFind = 'abc';

  test('it should return the number of occurrences', () => {

    const actual =
      occurrences({
        text,
        toFind,
      });

    const expected =
      3;

    expect(actual)
      .toEqual(expected);
  });
});


describe('given an empty text and a searched string', () => {

  const text = '';

  const toFind = 'abc';

  test('it should return the number of occurrences', () => {

    const actual =
      occurrences({
        text,
        toFind,
      });

    const expected =
      0;

    expect(actual)
      .toEqual(expected);
  });
});