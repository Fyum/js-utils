const isInvalidAttribute =
  (array, attribute) => 
    array
      .some(x => 
          typeof x[attribute] !== 'string')
      && array
          .some(x => 
            typeof x[attribute] !== 'number')
/**
  @function sortBy - Sort an array of object
  @param {Array} array - the array to flatten
  @param {string} attribute - the attribute to sort by
  @param {boolean} boolean - asc order if true
  @returns the sorted array
**/
const sortBy = ({
  array,
  attribute,
  asc = true,
}) => {

  if(isInvalidAttribute(array, attribute)){
    throw new Error(`Attribute "${attribute}" should all be type of either string or number`);
  }

  return array.sort((a, b) => 
    asc  
      ? a[attribute] > b[attribute]
      : a[attribute] < b[attribute]
  );
}

export default
sortBy;