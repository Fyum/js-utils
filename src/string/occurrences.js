const recursiveCount = ({
  current,
  toFind,
  counter = 0,
}) => {
  let next = current.replace(toFind, '');
  return current.length !== next.length
    ? recursiveCount({
        current: next,
        toFind,
        counter: counter + 1,
      })
    : counter;
};

/**
 * 
 * @param {string} text - the source text
 * @param {string} toFind - the string to find the occurrences for
 * @returns the number of times the text occures
 */
const occurrences = ({
  text = '',
  toFind = '',
}) => 
  recursiveCount({
    current: text,
    toFind,
  });

export default
occurrences;