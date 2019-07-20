/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
const binarySearch = (list = [], item) => {
  let low = 0;
  let heigh = list.length - 1;

  while (low <= heigh) {
    const mid = Math.floor((low + heigh) / 2);
    const guess = list[mid];

    if (guess === item) return mid;
    else if (guess > item) heigh = mid - 1;
    else low = mid + 1;
  }

  return null;
};

const list = [1, 3, 5, 7, 9];

console.log(binarySearch(list, 3)); // 1
console.log(binarySearch(list, -1)); // null
