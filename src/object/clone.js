/**
 * @function clone - make a copy of an object
 * @param {object} object the target object
 * @returns the copy of the object
 */
const clone =
  object =>
    JSON.parse(
      JSON.stringify(
        object));

export default
clone;