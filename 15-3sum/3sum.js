/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //two pointer approach.
    let res=[]
    nums.sort((a,b)=> a - b );
    for(let i=0; i<nums.length; i++){
        let left=i+1; let right=nums.length -1;
        let a= nums[i]
        if(a > 0) break;
        if(i > 0 && nums[i] === nums[i -1]) continue;
        while(left < right){
            totalSum = a + nums[left] + nums[right]
            if(totalSum > 0 ){
                right--;
            }else if(totalSum < 0){
                left++;
            }else{
                res.push([a,nums[left],nums[right]])
                left++;
                right--;
                while(nums[left] == nums[left-1] && nums[right] == nums[right+1]){
                    left++;
                }
            }
        }
        

    }
   return res;
};