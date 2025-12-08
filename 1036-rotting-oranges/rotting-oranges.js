/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m= grid.length;
    const n = grid[0].length;

    const queue= []; //[r,c,0] row , column times
    let fresh = 0;

    // Count fresh oranges & add all rotten oranges to the queue
    // row column nested loop
    for(let r = 0; r< m; r++){
        for(let c=0; c<n; c++){
            if(grid[r][c] == 1){ fresh++}
            if(grid[r][c] == 2){ queue.push([r,c,0])}
        }
    }
    //if no fresh orenges then return 0
    if(fresh === 0) return 0;

    const directions= [[1,0], [-1,0], [0,1],[0,-1]];
    let minutes = 0;

    // bfs rotting process
    while(queue.length > 0){
        const [r,c,time] = queue.shift();
        minutes = Math.max(minutes, time);

        for(let [dr, dc] of directions){
            let nr = dr + r;
            let nc = dc+c;
            // valid fresh orange neighbor
            if(nr>= 0 && nr < m && nc >=0 && nc < n && grid[nr][nc] === 1){
                grid[nr][nc]=2 // becomes rotten / make it rotten
                fresh--;
                queue.push([nr,nc,time + 1]);
            }
        }
    }

    return fresh === 0 ? minutes : -1

};