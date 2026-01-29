let nums = [
  1, 5, 9, 10, 56, 45, 88, 285, 555, 25, 45, 78, 15, 39, 234, 32, 85, 2, 3, 4,
  5, 6, 7,
];

const topKFrequent = function (nums, k) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let sortedArray = Array.from(map.entries()).sort((a, b) => {
    return b[1] - a[1];
  });
  return sortedArray.slice(0, k).map((entries) => entries[0]);
};
let result = topKFrequent(nums, 3);
console.log(result);

// Function using the 'arguments' object (which is array-like) argument object auto created if found
// argument passed in parameter in non arraw functions
// function createArrayFromArgs() {
//   return Array.from(arguments);
// }
// console.log(createArrayFromArgs(1, 2, 3));
// Output: [1, 2, 3]
