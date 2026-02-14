/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //two pointer approach.
    nums.sort((a,b)=>a-b);
    const res=[];
    for(let i=0; i<nums.length; i++){
        let x=nums[i];
        if(x > 0) break;
        if(i>0 && nums[i] === nums[i-1]) continue; 
        let left= i+1;
        let right= nums.length-1;
        while(left < right){

            let value = x + nums[left] + nums[right];
            if(value == 0){
                res.push([ x, nums[left], nums[right] ])
                left++;
                right--;
                while(left<right && nums[left] === nums[left-1]){left++}
            }else if(value < 0){
                left++;
            }else{
                right--;
            }
        }
        
    }
    return res;
};