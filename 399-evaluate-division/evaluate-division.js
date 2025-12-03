/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph ={}

    for(let i=0; i< equations.length; i++){
        const [a,b] = equations[i]
        const val = values[i]
        if(!graph[a]) graph[a]=[]
        if(!graph[b]) graph[b]=[]

        graph[a].push([b, val])
        graph[b].push([a, 1/val])

    }
    //dfs helper
    const dfs= (current, target, visited)=>{
        if( !(current in graph)) return -1
        if(current === target) return 1
        visited.add(current)

        for(let [neighbor, weight] of graph[current]){
            if (!visited.has(neighbor)){
              const result =  dfs(neighbor, target, visited)
              if(result !== -1) return result * weight
            }
        }
        return -1
    }
    //Process querys c/d
    let output=[]
    for( let [c,d] of queries){
        let visited = new Set()
        const value = dfs(c,d,visited)
        output.push(value)
    }
    return output
};