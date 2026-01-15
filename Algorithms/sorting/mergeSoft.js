let array = [
  1, 5, 9, 10, 56, 45, 88, 285, 555, 25, 45, 78, 15, 39, 234, 32, 85, 2, 3, 4,
  5, 6, 7,
];
//
const mergeSort = (array) => {
  if (array.length === 1) return array;

  // split arry into right and left
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};
function merge(left, right) {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
let answer = mergeSort(array);
console.log(answer);
