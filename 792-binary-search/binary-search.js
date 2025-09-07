/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n= nums.length
    let halfIndex=Math.floor(n/2)
    let mid= nums[halfIndex]
    if(nums.length === 1){
        return nums[0] === target? 0: -1
    }else if(target < mid ){
        for(let i=0; i< halfIndex; i++){
            if(nums[i] === target){
                return i
            }
        }
        return -1
    }else{
        for(let i=halfIndex; i< n; i++){
            if(nums[i] === target){
                return i
            } 
        }
        return -1

    }
};