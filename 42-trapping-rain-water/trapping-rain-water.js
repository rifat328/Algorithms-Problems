/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length < 2) return 0;
    let left=0; 
    let right=height.length-1;
    let leftMax=height[left], rightMax= height[right];
    let res=0;
    while(left<right){
        if(height[left] < height[right]){
            left++;
            leftMax = Math.max(leftMax, height[left])
            res +=  leftMax - height[left] ;
        } else{
            right--;
            rightMax = Math.max(rightMax, height[right])
            res += rightMax - height[right];
        }
    }
    return res;
};