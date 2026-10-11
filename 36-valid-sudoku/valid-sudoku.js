/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = Array.from({length:9}, ()=> new Set());
  let column = Array.from({length:9}, ()=>new Set());
  let subGrid= Array.from({length:9}, ()=> new Set());

  for(let r=0; r<9; r++){
    for(let c=0; c<9; c++){
        let value= board[r][c]
        if(value == ".") continue;

        let gridIndex = Math.floor(r/3) *3 + Math.floor(c/3);
        if(row[r].has(value) || column[c].has(value) || subGrid[gridIndex].has(value) ){
            return false;
        }
        //otherWise
        row[r].add(value)
        column[c].add(value)
        subGrid[gridIndex].add(value)

    }
  }
   return true;
};
