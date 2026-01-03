/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];

    function backtrack(index, path) {
        // base case
        if (index === nums.length) {
            result.push([...path]); // copy
            return;
        }

        // choice 1: include nums[index]
        path.push(nums[index]);
        backtrack(index + 1, path);

        // undo
        path.pop();

        // choice 2: exclude nums[index]
        backtrack(index + 1, path);
    }

    backtrack(0, []);
    return result;

};