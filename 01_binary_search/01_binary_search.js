const binarySearch = (list, item) => {
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
