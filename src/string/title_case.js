const titleCase =
  str => 
    str
      .split(' ')
      .map(x => x[0].toUpperCase() + x.slice(1))
      .join(' ')

export default
titleCase;