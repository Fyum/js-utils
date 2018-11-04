import isLeapYear from '../../src/date/is_leap_year';

describe('given some leap years', () => {
  const years = [
    1988,
    1992,
    1996,
    2000,
    2004,
    2008,
    2012,
    2016,
    2020, 
  ];

  years.map(year => {

    test(`it should return true for ${year}`, () => {
      const actual =
        isLeapYear(year);
      
      const expected =
        true;
  
      expect(actual)
        .toEqual(expected);
    });

  }); 
});

describe('given some non leap years', () => {
  const years = [
    1989,
    1994,
    1999,
    2005,
    2010,
    2015,
    2023,
    2033,
    2042, 
  ];

  years.map(year => {

    test(`it should return true for ${year}`, () => {
      const actual =
        isLeapYear(year);
      
      const expected =
        false;
  
      expect(actual)
        .toEqual(expected);
    });


  }); 
});