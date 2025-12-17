/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b)=> a -b);
    const result= [];
    let m= potions.length;
    for (let s of spells){
        let minPotion = Math.ceil(success / s);
        // Binary search for first potion >= minPotion
        let left =0;
        let right = m-1;
        let index=m;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(potions[mid] >= minPotion){
                index = mid;
                right = mid -1;

            }else{
                left = mid + 1;
            }
        }
        result.push(m - index);
    }

    return result;
};