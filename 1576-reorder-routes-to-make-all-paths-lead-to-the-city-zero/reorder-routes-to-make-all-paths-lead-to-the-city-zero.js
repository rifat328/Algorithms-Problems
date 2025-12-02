/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = Array.from({length:n}, ()=>[])
    for(let [a, b] of connections){
        graph[a].push([b, 1]);
        graph[b].push([a, 0]);
    }
    let visited = new Array(n).fill(false);
    let changes=0;

    function dfs(city){
        visited[city] = true;
        for(let [next, cost] of graph[city]){
            if(!visited[next]){
                changes += cost;
                dfs(next)
            }
        }
    }
    dfs(0);
    return changes;
};