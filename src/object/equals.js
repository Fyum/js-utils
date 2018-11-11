const isObject =
  value =>
    value instanceof Object;

// TODO make it work for nested objects, and arrays
/**
 * @function equals - check if two objects are equals
 * @param {object1} first object
 * @param {object2} second object
 * @returns true/false 
 */
const equals = ({
  object1,
  object2,
}) =>
  Object
    .keys(object2)
    .every(key => {
      if (isObject(object1[key])
        && isObject(object2[key])) {
        return equals({
          object1: object1[key],
          object2: object2[key],
        });
      }

      return object1[key] === object2[key]
    }
    );

export default
  equals;