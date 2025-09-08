/**
 * @param {number} n
 * @return {number[]}
 */
 

var getNoZeroIntegers = function(n) {
    let hasZero = (num)=> !String(num).includes(0)
    for (let a = 1; a < n; a++) {
         b = n - a;
        if(hasZero(a) && hasZero(b)){
            return [a, b];
        }
    //memory only beats 23.19
    }
}

// 2nd solution beats 100% 0ms runtime , memory 43.48%
// let hasZeroDigit= function(n){
//     while(n>0){
//         if(n%10 === 0) return true;
//         n= Math.floor(n/10)
//     }
//     return false;
//  }
// var getNoZeroIntegers = function(n) {
//     for (let i = 1; i < n; i++) {
//         let a = i, b = n - i;
//         if (!hasZeroDigit(a) && !hasZeroDigit(b)) {
//       return [a, b];  
//         }
//     }
        
//     }
// my initial solution 4ms beats 14.49%
// let hasZeroDigit= function(n){
//     while(n>0){
//         if(n%10 === 0) return true;
//         n= Math.floor(n/10)
//     }
//     return false;
//  }
// var getNoZeroIntegers = function(n) {
//     let stack=[]
//     let count=0
//     for(let i=1; i<= n; i++){
//         let a=i, b=n-i;
//         if(count == 0){
//             if(a+b == n){
//            let A = hasZeroDigit(a)
//            let B = hasZeroDigit(b)
//            if(A == false && B == false){
//             stack.push(a);
//             stack.push(b);
//             count=2
//            }
//             }
//         }
        
//     }
//     return stack;
// };