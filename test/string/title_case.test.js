import titleCase from '../../src/string/title_case';

describe('given a string with words with lower case letter as first letter', () => {

  const str = 'the title';

  test('it should capitalise all the first letters of all the words', () => {

    const actual =
      titleCase(str);

    const expected =
      'The Title';

    expect(actual)
      .toEqual(expected);
  }); 
});


describe('given a string of numbers only', () => {

  const str = '123 456';

  test('it should return the same string', () => {

    const actual =
      titleCase(str);

    const expected =
      '123 456';

    expect(actual)
      .toEqual(expected);
  }); 
});