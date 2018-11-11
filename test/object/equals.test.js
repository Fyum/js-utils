import equals from '../../src/object/equals';

describe('given two objects with the same properties and values', () => {
  const object1 = {
    key1: 'KEY1',
    key2: 'KEY2'
  };

  const object2 = {
    key1: 'KEY1',
    key2: 'KEY2'
  };

  test('it should return true', () => {
    const actual =
      equals({ object1, object2 });

    const expected =
      true;
    
    expect(actual)
      .toEqual(expected);
  });
});

describe('given two objects with different properties and values', () => {
  const object1 = {
    key1: 'KEY1',
    key3: 'KEY3'
  };

  const object2 = {
    key1: 'KEY1',
    key2: 'KEY2'
  };

  test('it should return false', () => {
    const actual =
      equals({ object1, object2 });

    const expected =
      false;
    
    expect(actual)
      .toEqual(expected);
  });
});

// TODO enable test when implemented
xdescribe('given two objects with the same properties and values containing arrays', () => {
  const object1 = {
    key1: [1],
    key2: [2]
  };

  const object2 = {
    key1: [1],
    key2: [2]
  };

  test('it should return true', () => {
    const actual =
      equals({ object1, object2 });

    const expected =
      true;
    
    expect(actual)
      .toEqual(expected);
  });
});

describe('given two objects with the same properties and values containing objects', () => {
  const object1 = {
    key1: {
      key11: 'KEY11'
    },
    key2: {
      key22: 'KEY22'
    },
  };

  const object2 = {
    key1: {
      key11: 'KEY11'
    },
    key2: {
      key22: 'KEY22'
    },
  };

  test('it should return true', () => {
    const actual =
      equals({ object1, object2 });

    const expected =
      true;
    
    expect(actual)
      .toEqual(expected);
  });
});