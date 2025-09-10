/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxSum=0
    let currentSum=0
    let vowels = new Set("aeiou")
    
    for(let i=0; i<k; i++){
        if(vowels.has(s[i])){
            currentSum++
        }
    }
    maxSum=currentSum
    for(let i=k;i<s.length;i++){
        vowels.has(s[i]) ? currentSum++: currentSum;
        vowels.has(s[i-k]) ? currentSum-- : currentSum;
        maxSum=Math.max(maxSum, currentSum)
    }
    return maxSum
    
};