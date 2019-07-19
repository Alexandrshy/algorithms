const findSmallestIndex = arr => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = arr => {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    const smallest = findSmallestIndex(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }

  return newArr;
};
