/**
 * Count the number of elements in the array
 * @param {Array} list Array of numbers
 * @returns {number} The number of elements in the array
 */
const count = list => (list.length === 0 ? 0 : 1 + count(list.slice(1)));

count([1, 2, 3, 4, 5, 6, 7]); // 7
