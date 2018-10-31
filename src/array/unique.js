// TODO make it work for objects too and not only primitive types
/**
 * @function unique - retain unique values in an array.
 * @param array - the array
 * @returns the array of unique values
 */
const unique =
  array =>
    array
      .filter((x, i, originalArray) =>
        originalArray
          .indexOf(x) === i);

export default
unique;