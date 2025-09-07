/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radient=[]
    let dire =[]
    for (let [i ,ch] of [...senate].entries()) {
        if (senate[i] === "R") {
            radient.push(i);
        } else {
            dire.push(i);
        }
    }
    
    while(radient.length >0 && dire.length >0){
        if(radient[0] < dire[0]){
            dire.shift()
            radient.push(radient.shift()+senate.length)
        }else{
            radient.shift()
            dire.push(dire.shift() + senate.length);
        }
    }
    return radient.length == 0 ? "Dire" : "Radiant"
};

