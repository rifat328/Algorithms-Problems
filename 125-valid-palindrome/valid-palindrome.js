/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let cleanString= s.toLowerCase().replace(/[^a-z0-9]/g , "")
    let left=0;
    let right= cleanString.length-1;
    while(left<right){
       if(cleanString[left] !== cleanString[right] ){
        return false
       }
       left++
       right--
    }
    return true
};