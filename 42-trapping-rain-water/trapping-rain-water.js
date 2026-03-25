/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
   //two pointer approach
   let n= height.length
   if(n === 0 ) return 0;
   let left=0;let right= n-1;
   let leftMax=height[left]
   let rightMax=height[right]
   
   let output=0;
    // max wall on that side – height at that position
   while(left < right){
    if(leftMax <= rightMax){
        left++;
        leftMax = Math.max(leftMax, height[left])
        output += leftMax - height[left];
    }else if(leftMax > rightMax){
        right--;
        rightMax= Math.max(rightMax, height[right])
        output += rightMax - height[right]
    }
   }
   return output;
   
};