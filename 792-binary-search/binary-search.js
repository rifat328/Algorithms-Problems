/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left =0,right= nums.length -1 // points to 2 ends of the array
    while(left <= right){
        let mid= Math.floor((left+right) /2) //mid calculation on each iteration
        if (nums[mid] === target) { return mid}
        else if(nums[mid] < target) {left= mid +1}
        else right = mid-1
    }
    return -1
};


// var search = function(nums, target) {
//     let n= nums.length
//     let halfIndex=Math.floor(n/2)
//     let mid= nums[halfIndex]
//     if(nums.length === 1){
//         return nums[0] === target? 0: -1
//     }else if(target < mid ){
//         for(let i=0; i< halfIndex; i++){
//             if(nums[i] === target){
//                 return i
//             }
//         }
//         return -1
//     }else{
//         for(let i=halfIndex; i< n; i++){
//             if(nums[i] === target){
//                 return i
//             } 
//         }
//         return -1

//     }
// }
// Time: O(log n) because the search space is halved each step.
// Space: O(1) if iterative, O(log n) if recursive.