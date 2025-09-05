/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let initalValue=String(x)
    let reversedValue= String(x).split("").reverse().join("");
    return initalValue === reversedValue
};


// Number(initalValue) === Number(reversedValue)