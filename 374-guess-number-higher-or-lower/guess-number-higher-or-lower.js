/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low =1;
    let high=n;
    while (low <= high){
        // Calculate mid to avoid potential overflow in some languages
        let mid = Math.floor((low + high) / 2)
        let response = guess(mid);
        if (response === 0){
            return mid
        }else if(response === 1){
            // Target is in the right half
            low = mid + 1
        }else{
            // Target is in the left half
            high= mid -1
        }
    }
};