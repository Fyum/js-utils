/**
  @function flatten - Allow to flatten nested array
  @example [[1, 2], [1, 2]] => [1, 2, 1, 2]
  @param {Array} array - the array to flatten
  @returns a 1-D array
**/
const flatten =
  array =>
    array
      .reduce((acc, val) => 
        Array.isArray(val) 
          ? acc.concat(flatten(val)) 
          : acc.concat(val), [])

// Using spread operator
// It avoids mutation, but can be expensive in terms of performance on big arrays
const flattenV2 =
  array => 
    array
      .reduce((acc, val) => 
        Array.isArray(val) 
          ? [...acc, ...flatten(val)]
          : [...acc, val], [])

export {
  flattenV2
};

export default 
flatten;