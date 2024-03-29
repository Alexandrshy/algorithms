/**
 * Finds the index of the element with the smallest value in the array
 * @param {Array} array Source array
 * @returns {number} Index of the element with the smallest value
 */
const findSmallestIndex = array => {
  let smallest = array[0];
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

/**
 * Sort array by increment
 * @param {Array} array Source array
 * @returns {Array} New sorted array
 */
const selectionSort = array => {
  const sortedArray = [];
  const copyArray = [...array];

  for (let i = 0; i < array.length; i++) {
    const smallest = findSmallestIndex(copyArray);
    sortedArray.push(copyArray.splice(smallest, 1)[0]);
  }

  return sortedArray;
};

const sourceArray = [5, 3, 6, 2, 10];
const sourtedArray = selectionSort([5, 3, 6, 2, 10]);

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sourtedArray); // [2, 3, 5, 6, 10]
