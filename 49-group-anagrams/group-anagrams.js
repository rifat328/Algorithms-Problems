/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length <=1){
        return [strs];
    }
    let map = {};
    for(let i=0; i< strs.length; i++){
        let sortedKey=strs[i].split("").sort().join("");
        if(!map[sortedKey]){
            map[sortedKey]=[];
        }
        map[sortedKey].push(strs[i]);

    }
    return Object.values(map)
};