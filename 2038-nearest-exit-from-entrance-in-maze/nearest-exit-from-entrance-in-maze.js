/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m= maze.length;
    const n= maze[0].length;
    const queue = [[entrance[0], entrance[1], 0]]; // row , column , steps
    maze[entrance[0]][entrance[1]]="+" // marked enterence as visited

    // up , down , left, right
    const directions = [
        [1,0], [-1,0], [0,1], [0,-1]
    ];

    while(queue.length > 0){
        const [r, c, steps] = queue.shift();
        for(let [dr,dc] of directions){
            let nr= r + dr;
            let nc= c + dc;
            //check for boundery walls
            if(nr >=0 && nr < m && nc >= 0 && nc < n && maze[nr][nc] === "."){
                // then check if exist 
                if(nr === 0 || nr === m-1 || nc === 0 || nc === n-1){
                    return steps + 1
                }

                // otherwise mark as visited 
                maze[nr][nc] = "+";
                queue.push([nr, nc, steps + 1]);
            }
        }
    }

    return -1 ;// no exit found
};