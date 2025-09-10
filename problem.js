/* problem statement
Write a function.
Input: (1)data; (2)target
     data: a list/array of numbers
     target: a number
Output: [x, y], x and y are two elements in the data array that satisfy x-y == target

*/
//Test cases:
//  1. Basic positive numbers
// (nums = [5, 6, 4, 9, 1]), (target = 4);
//  Expected: [5, 1] OR [9, 5]  Passed

//  2. Negative numbers
// (nums = [-3, -1, -7, 2]), (target = 4);
//  Expected: [-3, -7]  (since -3 - (-7) = 4) Failed

//  3. Mixed positive + negative
// (nums = [10, -2, 7, 3]), (target = 12);
//  Expected: [10, -2]     Failed

//  4. Duplicate numbers
// (nums = [2, 2, 2]), (target = 0);
//  Expected: [2, 2]       Passed

let nums = [-3, -1, -7, 2];
let target = 4;
const findElement = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    let y = x - target; // so x-y == target
    if (map[y] !== undefined) {
      return [x, y];
    } else {
      map[x] = i; //storing current num in map : where key as value and value as indices    //map[x] = nums[i]; // a.set(x, nums[i]) a = new Map()
    }
  }
  return [];
};

/*
console.log(findElement(nums, target));
console.log(findElement([10, -2, 7, 3], 12)); // [10, -2] Failed
x-y = target
we need y so
-y = target -x
(-y) × (-1) = (target - x) × (-1)
y = -target + x;
y = x - target   after multiplying with -1 at both sides

*/
// Version 2 : since 2 out of 4 test cases failed we have to check y form both direction if we want thouse tast cases to pass
// x-y = target  and y-x = target
// 1. y= x - target and  2. y = x + target
// these 2 formulas will cover all the test cases from both direction
// 1 works if y appears before x , but if y comes after x then one element gets missed .

const findElementV2 = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    let y1 = x - target; // x-y = target
    let y2 = x + target; // y-x = target reversed case
    if (map.has(y1)) {
      return [x, y1];
    }
    if (map.has(y2)) {
      return [y2, x];
    }
    map.set(x, i);
  }
  return [];
};
console.log("------------=>Test Cases:-------------");
console.log(findElementV2([10, -2, 7, 3], 12)); // [10, -2] Passed
console.log(findElementV2([-3, -1, -7, 2], 4)); // [-3, -7] Passed
console.log(findElementV2([5, 6, 4, 9, 1], 4)); //  [9, 5]  Passed
console.log(findElementV2([2, 2, 2], 0)); // [2,2]          Passed
// Edge Cases:
console.log("------------=>Edge Cases:-------------");
console.log(findElementV2([], 5)); // []  Passed
console.log(findElementV2([7], 3)); //[]  Passed
console.log(findElementV2([1, 2, 3], 10)); // [] Passed
console.log(findElementV2([1000000000, 999999999], 1)); // [1000000000, 999999999] Passed
console.log(findElementV2([4, 8, 12], -4)); // [4, 8] Passed
console.log(findElementV2([0, 5, -5], 0)); // [] Passed
console.log(
  findElementV2(
    Array.from({ length: 1e6 }, (_, i) => i),
    999999
  )
); // [999999, 0] Passed

/* Edge Cases:
 5. Empty array
nums = [], target = 5
 Expected: []

 6. Single element
nums = [7], target = 3
 Expected: []  (need at least 2 numbers)

 7. No valid pair
nums = [1, 2, 3], target = 10
 Expected: []

 8. Large values
nums = [1000000000, 999999999], target = 1
 Expected: [1000000000, 999999999]

 9. Target is negative
nums = [4, 8, 12], target = -4
 Expected: [8, 12]

 10. Zero target
nums = [0, 5, -5], target = 0
 Expected: [5, 5] (if duplicates allowed) OR []

 11. Very large input (performance test)
nums = Array.from({length: 1e6}, (_, i) => i); target = 999999;
 Should return [999999, 0]

*/

/* Detail dry run :
nums = [10, -2, 7, 3], target = 12
We want a pair [10, -2] because 10 - (-2) = 12.
map = {}
i=0 → x=10
   y = 10 - 12 = -2
   map doesn’t have -2 → store map[10] = 0
   map = {10:0}

i=1 → x=-2
   y = -2 - 12 = -14
   map doesn’t have -14 → store map[-2] = 1
   map = {10:0, -2:1}

   It never finds the pair [10, -2].
Because when we saw 10, -2 wasn’t in the map yet.
And when we saw -2, the formula gave -14, not 10.

Using y = x - target AND y = x + target

map = {}
i=0 → x=10
   y1 = 10 - 12 = -2
   y2 = 10 + 12 = 22
   neither in map → store 10
   map = {10:0}

i=1 → x=-2
   y1 = -2 - 12 = -14
   y2 = -2 + 12 = 10
    10 is in map → pair = [-2, 10]
    Found [x, y] correctly.
*/
