/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radiant=[]
    let dire =[]
    let n= senate.length;
    for (let i = 0; i < n ; i++) {
        if (senate[i] === "R") {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }
    let headRadiant=0,headDire=0;
    while(headRadiant < radiant.length && headDire < dire.length){
        const radiantIndex = radiant[headRadiant];
        const direIndex = dire[headDire];
    if (radiantIndex < direIndex) {
      radiant.push(radiantIndex + n);
      // remove current Radiant (headRadient++) and the banned Dire (headDire++)
      headRadiant++;
      headDire++;
    } else {
      // Dire acts first and bans the Radiant at headRadient
      dire.push(direIndex + n);
      headDire++;
      headRadiant++;
    }
  }

  // if there are still Radiant (rHead < radiant.length) they win
  return headRadiant < radiant.length ? "Radiant" : "Dire";
};




    // let radient=[]
    // let dire =[]
    // for (let i = 0; i < senate.length; i++) {
    //     if (senate[i] === "R") {
    //         radient.push(i);
    //     } else {
    //         dire.push(i);
    //     }
    // }
    
    // while(radient.length >0 && dire.length >0){
    //     if(radient[0] < dire[0]){
    //         dire.shift()
    //         radient.push(radient.shift()+senate.length)
    //     }else{
    //         radient.shift()
    //         dire.push(dire.shift() + senate.length);
    //     }
    // }
    // return radient.length == 0 ? "Dire" : "Radiant"
    //second approach with different for loop
    //     let radient=[]
    // let dire =[]
    // for (let [i ,ch] of [...senate].entries()) {
    //     if (senate[i] === "R") {
    //         radient.push(i);
    //     } else {
    //         dire.push(i);
    //     }
    // }
    
    // while(radient.length >0 && dire.length >0){
    //     if(radient[0] < dire[0]){
    //         dire.shift()
    //         radient.push(radient.shift()+senate.length)
    //     }else{
    //         radient.shift()
    //         dire.push(dire.shift() + senate.length);
    //     }
    // }
    // return radient.length == 0 ? "Dire" : "Radiant"

