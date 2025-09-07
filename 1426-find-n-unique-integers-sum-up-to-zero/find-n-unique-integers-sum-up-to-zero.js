/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    let arrayResult=[]
    
        for(let i=1; i<= Math.floor(n/2) ; i++){
            arrayResult.push(i)
            arrayResult.push(-i)
        }
        if(n%2 !== 0){
            arrayResult.push(0)
        }
        
        
    return arrayResult;
};