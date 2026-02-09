// BInary Search Approach
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    let low = i + 1; // Start search to the right of the current number
    let high = numbers.length - 1;

    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (numbers[mid] === complement) {
        return [i + 1, mid + 1]; // Return 1-based indices
      } else if (numbers[mid] < complement) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
};
var twoSum2 = function (numbers, target) {
  // O(N)
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let total = numbers[left] + numbers[right];
    if (total == target) {
      return [left + 1, right + 1];
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }
};
let number = [2, 7, 11, 15];
let target = 9;
let output = twoSum(number, target); // O(N log N) slower then O(N)
console.log(output);
