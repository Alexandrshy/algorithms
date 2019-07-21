/**
 * Calculate the sum of array elements
 * @param {Array} list Array of numbers
 * @returns {number} Sum
 */
const sum = list => {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
};

sum([1, 2, 3, 4, 5, 6, 7]); // 28

/**
 * Calculate the sum of array elements
 * @param {Array} list Array of numbers
 * @returns {number} Sum
 */
const sumReduce = list => list.reduce((acc, item) => acc + item);

sumReduce([1, 2, 3, 4, 5, 6, 7]); // 28

/**
 * Calculate the sum of array elements
 * @param {Array} list Array of numbers
 * @returns {number} Sum
 */
const sumRecursive = list =>
  list.length === 0 ? 0 : list[0] + sumRecursive(list.slice(1));

sumRecursive([1, 2, 3, 4, 5, 6, 7]); // 28
