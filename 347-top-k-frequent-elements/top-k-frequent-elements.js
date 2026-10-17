/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let map = new Map();
    
    for(let num of nums){
        map.set(num, (map.get(num) || 0)+1 )
    }
    let bucket= Array.from({length:nums.length + 1},()=>[]);

    for(let [num, freq] of map.entries()){
        bucket[freq].push(num);
    }
    // reverse
    let result=[]
    for(let i= bucket.length-1; i>=0 && result.length <k ; i--){
        if(bucket[i].length > 0){
            result.push(...bucket[i])
        }
    }
    return result.slice(0,k)

}
   