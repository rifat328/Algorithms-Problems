/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
    // Initialize arrays containing 9 Sets each
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const subBoxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];

            if (val === ".") continue;

            // calculate which of the nine 3x3 boxes we are in (0-8)
            const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // check if the value already exists in the current row, column, or box
            if (rows[r].has(val) || cols[c].has(val) || subBoxes[boxIdx].has(val)) {
                return false;
            }

            // add the value to the respective sets
            rows[r].add(val);
            cols[c].add(val);
            subBoxes[boxIdx].add(val);
        }
    }

    return true;
};
//  time complexity is 0(1) beacause the number of operation is same , board size is fixed 