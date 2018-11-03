const totalCount =
  (from, to) =>
    parseInt(to + 1) - parseInt(from);
/**
 * @function numbers - Create an array of numbers
 * @param {number} from - start number
 * @param {number} to - last number
 * @returns an array of numbers
 */
const numbers = ({
  from = 0,
  to = 10,
}) => {
  const count = 
    totalCount(from, to);

  return (
    Array(count)
      .fill()
      .map((x, i) => 
        Number(i + from))
  )
}

export default
numbers;