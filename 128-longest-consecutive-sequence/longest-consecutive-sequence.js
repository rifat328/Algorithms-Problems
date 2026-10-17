/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0)return 0;
    let number= new Set(nums)
    let max= 1;
    for(let num of number){
        if(number.has(num -1)){
            continue;
        }
        
        let count=num +1
        let currentStreak=1
        while(number.has(count)){
            count++
            currentStreak++
            max= Math.max(max, currentStreak)
            

        }
    }
    return max
}