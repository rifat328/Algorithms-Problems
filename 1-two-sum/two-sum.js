/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     // x= target - current
     // check if that value exist or not on map and return cordinate
     let map = {};
     for(let i=0; i< nums.length; i++){
        let x= target - nums[i];
        if(map[x] !== undefined){
            return [i, map[x]]
        }else{
            map[nums[i]]=i
        }
     }
     
};


// var twoSum = function(nums, target) {
//      for(var i=0;i<nums.length;i++){
//         for(var j = i+1;j<nums.length;j++){
//             if(nums[i]+nums[j] == target){
//                 return [i,j]
//             }
//         }
//     }
// };

// Invalid
// var twoSum = function(nums, target) {
//     for(let i ; nums.length; i++){
//         if(nums[i] + nums[i+1] === target){
//             return  [i, i+1];
//         }
//     }
// };