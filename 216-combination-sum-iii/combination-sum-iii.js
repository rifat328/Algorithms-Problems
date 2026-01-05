/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result=[]
    

    const backtrack=(start, comb, sum)=>{
        if(comb.length === k){
            
            if(sum === n) result.push([...comb]);
            return;
        }
        for(let num = start; num <=9 ; num++){
            if(sum + num > n){
                break;
            }

            comb.push(num)
            backtrack( num + 1, comb, sum + num )
            comb.pop()
        }
        
    }
    backtrack(1,[],0);
    return result;
};