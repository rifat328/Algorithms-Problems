/**
 * @param {number} n
 * @return {number[]}
 */
 let hasZeroDigit= function(n){
    while(n>0){
        if(n%10 === 0) return true;
        n= Math.floor(n/10)
    }
    return false;
 }
var getNoZeroIntegers = function(n) {
    let stack=[]
    let count=0
    for(let i=1; i<= n; i++){
        let a=i, b=n-i;
        if(count == 0){
            if(a+b == n){
           let A = hasZeroDigit(a)
           let B = hasZeroDigit(b)
           if(A == false && B == false){
            stack.push(a);
            stack.push(b);
            count=2
           }
            }
        }
        
    }
    return stack;
};