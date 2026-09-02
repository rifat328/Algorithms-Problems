/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
           map.set(nums[i] , (map.get(nums[i]) +1)) 
        }else{
            map.set(nums[i] , 1) 
        }
    }
    let sortedArray = [...map.entries()].sort((a,b)=>{
        return b[1] - a[1];
    })
    let output=[];
    for(let i=0; i<k; i++){
        output.push(sortedArray[i][0])
    }
    return output;
};