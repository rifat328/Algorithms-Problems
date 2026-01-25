/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    for(let num of nums){
        map.set(num, (map.get(num) || 0 ) + 1)
    }
    let sortedArray =Array.from(map.entries()).sort((a,b)=>{
        return b[1] - a[1];
    })
   return sortedArray.slice(0,k).map(entries=>entries[0])
};