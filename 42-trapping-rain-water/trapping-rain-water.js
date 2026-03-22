/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
   //brute force precomputation
   let n= height.length
   if(n === 0 ){
    return 0;
   }
   let leftMax= new Array(n).fill(0);
   let rightMax=new  Array(n).fill(0);
   let max=0;
   // for leftMax at each position of i
   for(let i=1; i<n; i++){
   max= Math.max(max , height[i-1])
   leftMax[i]=(max)
   }
   max = 0;
   for(let i=n-2; i>0; i--){
   max= Math.max(max , height[i+1])
   rightMax[i]=(max);
   }
   let total= 0
   for(let i= 0; i< n; i++){
    let min = Math.min(leftMax[i], rightMax[i])
    let water = min - height[i];
    if(water >0){
        total+= water
    }
    
   }
   return total;
};