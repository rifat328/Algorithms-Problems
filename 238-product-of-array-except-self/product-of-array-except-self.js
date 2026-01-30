/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result=[];
    //prefix loop
    for(let i=0; i<nums.length; i++){
        if(i===0){
            result[0]=1;
        }else{
            result[i]= nums[i-1] * result[i-1];
        }
    }
    //suffix loop
    let rightAccumulator=1
    for(let i=nums.length-1; i>=0; i--){
      
     result[i]=  result[i] * rightAccumulator;
     rightAccumulator= nums[i] * rightAccumulator
        
    }
    return result;
};