/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
   potions.sort((a,b)=> a - b);
   let m = potions.length;
   let result=[];

   for(let s of spells){
        let minPotion = Math.ceil(success/s);
        let left = 0;
        let right= m -1;
        let index = m
        while(left <= right){
            let mid =Math.floor((left + right) / 2) ;
            if(potions[mid] >= minPotion){
                index = mid
                right = mid -1
                
            }else{
                left = mid +1;
            }
        }
        result.push(m - index)
   }
   return result;
};