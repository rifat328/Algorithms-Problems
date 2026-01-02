let array = [
  1, 5, 9, 10, 56, 45, 88, 285, 555, 25, 45, 78, 15, 39, 234, 32, 85, 2, 3, 4,
  5, 6, 7,
];

const bubbleSort = (array) => {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

bubbleSort(array);
console.log(array);
