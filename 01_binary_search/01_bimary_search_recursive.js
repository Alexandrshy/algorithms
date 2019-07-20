/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @param {number} low Lower limit of search in the list
 * @param {number} high Highest limit of search in the list
 * @returns {(number|null)} Number if the value is found or null otherwise
 */
const binarySearch = (list = [], item, low = 0, high = list.length - 1) => {
  if (low > high) return null;
  const mid = Math.floor((low + high) / 2);
  const guess = list[mid];

  if (guess === item) return mid;
  else if (guess > item) return binarySearch(list, item, low, mid - 1);
  else return binarySearch(list, item, mid + 1, high);
};

const list = [1, 3, 5, 7, 9];

console.log(binarySearch(list, 3)); // 1
console.log(binarySearch(list, -1)); // null
