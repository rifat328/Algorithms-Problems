let array = [
  1, 5, 9, 10, 56, 45, 88, 285, 555, 25, 45, 78, 15, 39, 234, 32, 85, 2, 3, 4,
  5, 6, 7,
];
// [ sorted | unsorted ]
const insertionSort = (array) => {
  let length = array.length;
  for (let i = 1; i < length; i++) {
    let key = array[i]; // element to be inserted
    let j = i - 1; // sorted part section

    // shift element to the right.
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
};

insertionSort(array);
console.log(array);

/*
We shift elements to the right while they are greater than the key.
Since we only copy values, no data is lost — the key is safely stored.
When we find an element smaller than the key (or reach the start),
we insert the key at j + 1.
This way, for each i, we check all previous sorted elements and place the key correctly.

*/
