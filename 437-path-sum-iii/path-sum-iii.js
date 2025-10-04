/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
   let prefixSum = new Map()
   prefixSum.set(0,1) // base case: empty path sum = 0

   function dfs(node,currentSum){
    if(!node){return 0};
    currentSum+= node.val;
    // Check how many paths ending at this node have sum = targetSum
    let count = prefixSum.get( currentSum - targetSum) || 0
    // Add current prefix sum to map
    prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0 ) +1)

    count+= dfs(node.left, currentSum)
    count+= dfs(node.right, currentSum)
    // Backtrack: remove this node’s prefix sum before going back up
     prefixSum.set(currentSum, prefixSum.get(currentSum) - 1);
     return count;
   }

    return dfs(root, 0)

};


/*

var pathSum = function(root, targetSum) {
    // n Square solution because its calculating for every possible path
    function countPathFromNode(node, target){
        if(!node){ return 0}
        let count=0;
        if(node.val === target){
            count+=1;
        }
        count+= countPathFromNode(node.left, target - node.val)
        count+= countPathFromNode(node.right, target - node.val)
        return count;
    }
    
    if(!root){ return 0}
    let total= countPathFromNode(root, targetSum) // possible count for root node
        total+= pathSum(root.left, targetSum) 
        total+= pathSum(root.right, targetSum)
    
    return total;


};

*/