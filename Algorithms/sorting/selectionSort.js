let array = [
  1, 5, 9, 10, 56, 45, 88, 285, 555, 25, 45, 78, 15, 39, 234, 32, 85, 2, 3, 4,
  5, 6, 7,
];

const selectionSort = (array) => {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    let smallest = i;
    for (let j = i + 1; j < length; j++) {
      // find the smallest index.
      if (array[j] < array[i]) {
        smallest = j;
      }
    }
    let temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
};

selectionSort(array);
console.log(array);
