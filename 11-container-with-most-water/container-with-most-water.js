/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right= height.length-1;
    let max=0;
    while(left<right){
        let minHeight = Math.min(height[left], height[right])
        let currentMax= minHeight * (right-left)
         if(height[left] < height[right]){
            left++
        }else if(height[left] == height[right]){
            left++
        }else{
            right--
        }

        max = Math.max(max, currentMax);
    }
    return max;
        
};