/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //two pointer approach.
    nums.sort((a,b)=>a-b);
   let res=[]
   for(let i=0; i< nums.length; i++){
    let left= i+1;
    let right=nums.length -1;
    let x = nums[i] ;
    if(x> 0) break;
    if(i>0 && nums[i] == nums[i-1]) continue;
    while(left < right){
        let sum = x + nums[left] + nums[right];
        if(sum == 0){
           res.push([x,nums[left], nums[right]])
           left++;
           right--;
           while(left<right && nums[left] == nums[left-1]){left++ }
        }else if(sum < 0){
            left++;
        }else{
            right--;
        }
    }
   }
   return res;
};