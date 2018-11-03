import sortBy from '../../src/array/sort_by';

describe('given an array of object containing strings', () => {
  
  const array = [
    {
      a: 'a2',
      b: 'b1',
    },
    {
      a: 'a3',
      b: 'b2',
    },
    {
      a: 'a1',
      b: 'b3',
    }
  ];

  describe('and an attribute to sort by, with asc true', () => {

    const attribute = 'a';
    const asc = true;

    test('it should sort the array', () => {
      const actual =
        sortBy({
          array,
          attribute,
          asc,
        });

      const expected = [
        {
          a: 'a1',
          b: 'b3',
        },
        {
          a: 'a2',
          b: 'b1',
        },
        {
          a: 'a3',
          b: 'b2',
        },
      ]

      expect(actual)
        .toEqual(expected);
    });

  });

  describe('and an attribute to sort by, with asc false', () => {

    const attribute = 'b';
    const asc = false;

    test('it should sort the array', () => {
      const actual =
        sortBy({
          array,
          attribute,
          asc,
        });

      const expected = [
        {
          a: 'a1',
          b: 'b3',
        },
        {
          a: 'a3',
          b: 'b2',
        },
        {
          a: 'a2',
          b: 'b1',
        },
      ]

      expect(actual)
        .toEqual(expected);
    });

  });
});

describe('given an array of object containing numbers', () => {
  
  const array = [
    {
      a: 2,
      b: 1,
    },
    {
      a: 3,
      b: 2,
    },
    {
      a: 1,
      b: 3,
    }
  ];

  describe('and an attribute to sort by, with asc true', () => {

    const attribute = 'a';
    const asc = true;

    test('it should sort the array', () => {
      const actual =
        sortBy({
          array,
          attribute,
          asc,
        });

      const expected = [
        {
          a: 1,
          b: 3,
        },
        {
          a: 2,
          b: 1,
        },
        {
          a: 3,
          b: 2,
        },
      ]

      expect(actual)
        .toEqual(expected);
    });

  });

  describe('and an attribute to sort by, with asc false', () => {

    const attribute = 'b';
    const asc = false;

    test('it should sort the array', () => {
      const actual =
        sortBy({
          array,
          attribute,
          asc,
        });

      const expected = [
        {
          a: 1,
          b: 3,
        },
        {
          a: 3,
          b: 2,
        },
        {
          a: 2,
          b: 1,
        },
      ]

      expect(actual)
        .toEqual(expected);
    });

  });
});



describe('given an array of object containing numbers', () => {
  
  const array = [
    {
      a: 'a1',
      b: 'b3',
    },
    {
      a: 'a3',
      b: 'b2',
    },
    {
      a: 2,
      b: 1,
    },
  ];

  describe('and an attribute to sort by, with asc true', () => {

    const attribute = 'a';
    const asc = true;

    test('it should throw an error', () => {
      expect(() => {
        sortBy({
          array,
          attribute,
          asc,
        })
      }).toThrowError('Attribute "a" should all be type of either string or number');
    });

  });
});
