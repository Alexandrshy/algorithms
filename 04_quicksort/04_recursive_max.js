/**
 * Calculate the largest number
 * This solution works for arrays of any length
 * @param {Array} list Array of numbers
 * @param {number} max Maximum value
 * @returns {number} The argest number
 */
const calculateMax = (list, max = 0) =>
  list.length === 0
    ? max
    : calculateMax(list.slice(1), list[0] > max ? list[0] : max);

console.log(calculateMax([1, 5, 10, 25, 16, 1])); // 25
