import clone from '../../src/object/clone';

describe('given an object', () => {
  const object = {
    key1: 'KEY1',
    key2: 'KEY2',
  };

  const actual =
    clone(object);

  const expected = {
    key1: 'KEY1',
    key2: 'KEY2',
  };

  test('it should create a copy of the object', () => {
    expect(actual)
      .toEqual(expected);
  });

  test('it should not hold the same reference', () => {
    expect(object === actual)
      .toBe(false);
  });
});

describe('given an object with nested values', () => {
  const object = {
    key1: {
      key11: 'KEY11',
    },
    key2: {
      key22: 'KEY22',
    },
  };

  const actual =
    clone(object);

  const expected = {
    key1: {
      key11: 'KEY11',
    },
    key2: {
      key22: 'KEY22',
    },
  };

  test('it should create a copy of the object', () => {
    expect(actual)
      .toEqual(expected);
  });

  test('it should not hold the same reference', () => {
    expect(object === actual)
      .toBe(false);
  });
});


describe('given an object with arrays', () => {
  const object = {
    key1: [1, 1],
    key2: [2, 2],
  };

  const actual =
    clone(object);

  const expected = {
    key1: [1, 1],
    key2: [2, 2],
  };

  test('it should create a copy of the object', () => {
    expect(actual)
      .toEqual(expected);
  });

  test('it should not hold the same reference', () => {
    expect(object === actual)
      .toBe(false);
  });
});