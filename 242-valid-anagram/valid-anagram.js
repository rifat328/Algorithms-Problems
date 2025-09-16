/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
   let count = new Array(26).fill(0)
   let base = "a".charCodeAt(0) //base needed for determining the position in array "a" ascii value is 97
   for(let i=0; i< s.length; i++){
    count[s.charCodeAt(i) - base]++  //take the existing value and increase it by 1.
    count[t.charCodeAt(i) - base]-- // and decrement for if t exist 
   }
return count.every(x => x === 0);
}


