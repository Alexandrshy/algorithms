/**
 * Quick array sorting
 * @param {Array} list Source array
 * @returns {Array} Sorted array
 */
const quickSort = list => {
  if (list.length < 2) return list;
  const pivot = list[0];
  const less = list.slice(1).filter(item => item <= pivot);
  const greater = list.slice(1).filter(item => item > pivot);
  return [...quickSort(less), pivot, ...quickSort(greater)];
};
