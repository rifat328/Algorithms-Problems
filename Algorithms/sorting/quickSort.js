let array = [
  1, 5, 9, 10, 56, 45, 88, 285, 555, 25, 45, 78, 15, 39, 234, 32, 85, 2, 3, 4,
  5, 6, 7,
];

const quickSort = (arr) => {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (using the last element is common)
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partition the array into two halves
  // We loop until length - 1 because the last element is our pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort and combine
  return [...quickSort(left), pivot, ...quickSort(right)];
};

let answer = quickSort(array);
console.log(answer);
