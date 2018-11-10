import DAYS from '../../resources/days';

/**
 * @function day Provide the day details for the given number 
 * @param {number} num - The number of the day
 * @returns the day details
 */
const day =
  (num) => 
    DAYS
      .find(({ number }) =>
        number === num);

export default
day;