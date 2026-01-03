/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
   if(!digits.length){
    return [];
   }

   const digitToLetters ={
    "2":"abc",
    "3":"def",
    "4":"ghi",
    "5":"jkl",
    "6":"mno",
    "7":"pqrs",
    "8":"tuv",
    "9":"wxyz"
   }
   let res=[];
   function backTracking(index, comb){
    if(index === digits.length){
        res.push(comb);
        return;
    }
    for(let letter of digitToLetters[digits[index]]){
        backTracking(index + 1, comb + letter);
    }
   }
   backTracking(0,"");
   return res;
};