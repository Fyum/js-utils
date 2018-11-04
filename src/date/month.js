import MONTHS from '../../resources/months';
/**
 * @function months Provide the month details for the given the number
 * @param {number} num - The number of the month
 * @returns the month details
*/
const month =
  (num) => 
    MONTHS
      .find(({ number }) => 
        number === num);

export default
month;