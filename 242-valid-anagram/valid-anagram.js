/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sMap= new Map();
    let tMap= new Map();
    for(let i=0; i<s.length; i++){
        sMap.set(s[i], (sMap.get(s[i]) || 0) +1 );
    }
    for(let i=0; i<t.length; i++){
        tMap.set(t[i], (tMap.get(t[i]) || 0) +1 );
    }
    //now pic 1 and search another .
    for(const [key, value] of sMap.entries()){
        if(tMap.has(key)){
            if(value !== tMap.get(key)){
                return false;
            }
        }else{
            return false;
        }

        
    }
    return true;
};