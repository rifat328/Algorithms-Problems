/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length < 3){
        return [0,1]
    }
    let map = new Map()
    for(let i=0; i< nums.length; i++){
        let input = nums[i];
        let need = target - input
        if(map.has(need)){
            return [i, map.get(need)]
        }else{
            map.set(input, i)
        }
    }
};