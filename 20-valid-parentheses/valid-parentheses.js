/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    let closeToOpen={
        ")":"(",
        "]":"[",
        "}":"{",
    }
    let stack=[];
   for(let char of s){
        let topValue= stack.length-1;
       if( closeToOpen[char]){
        if(topValue >= 0 && stack[topValue] === closeToOpen[char]){
            stack.pop();
        }else{
            return false
        }
       }else{
        stack.push(char)
       }
   }
   
    return stack.length === 0;

};