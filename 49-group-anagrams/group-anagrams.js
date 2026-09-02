/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

   for(let i=0; i< strs.length; i++){
   let sortedValue = strs[i].split("").sort().join("");
    if(map.has(sortedValue)){
        map.get(sortedValue).push(strs[i]) 
    }else{
        map.set(sortedValue, [strs[i]])
    }
   }
   return Array.from(map.values());
};