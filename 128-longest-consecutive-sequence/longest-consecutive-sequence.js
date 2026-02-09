/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length === 0) return 0;
  let uniqueElement=new Set(nums)
  let max=1
  for(num of uniqueElement){
    if(uniqueElement.has(num-1)){
        continue;
    }
    let count=num+1;
    let currentStreak=1;
    while(uniqueElement.has(count)){
        count++
        currentStreak++
        max= Math.max(max, currentStreak)
    }
  }
  return max;
};

  // if(nums.length === 0) return 0;
    // let uniqueElement=new Set(nums)
    // let max=1;
    // let currentStreak=1
    // //sort
    // let sortedUnique = [...uniqueElement].sort((a,b)=>a-b);
    
    // for(let i=1; i<sortedUnique.length; i++){

    //     //max logic
    //     if(sortedUnique[i] == sortedUnique[i-1] + 1){
    //         currentStreak+=1
    //     }else{
    //          currentStreak=1;
    //     }
    //     max= Math.max(max, currentStreak)
    // }
    // return max