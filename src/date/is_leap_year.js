/**
 * Return true if the given year is a leap year and false otherwise
 * @param {number} year - the year
 * @returns true/false
 */
const isLeapYear =
  year =>
    (year % 4 === 0 
    && year % 100 !== 0)
      || year % 400 === 0

export default
isLeapYear;