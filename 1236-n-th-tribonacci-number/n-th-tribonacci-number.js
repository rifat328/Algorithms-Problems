/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    // space optimized version
    if(n === 0){return 0};
    if (n === 1 || n === 2) return 1;
    let a=0,b=1,c=1;
    for(let i=3; i<=n; i++){
        let next= a+b+c;
        a=b;
        b=c;
        c=next;
    }
    return c;
};

// normal dp version
    // if(n === 0){return 0};
    // if (n === 1 || n === 2) return 1;
    // const dp = new Array(n + 1);
    // dp[0] = 0;
    // dp[1] = 1;
    // dp[2] = 1;
    // for(let i=3; i<=n; i++){
    //     dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    // }
    // return dp[n];