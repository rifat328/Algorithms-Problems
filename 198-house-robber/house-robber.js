/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev1=0,prev2=0;
    for (let num of nums){
        let cur= Math.max(prev1, prev2 + num)
        prev2=prev1;
        prev1=cur;
    }
    return prev1;

};