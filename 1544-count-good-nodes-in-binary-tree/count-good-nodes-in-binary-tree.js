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
 * @return {number}
 */
var goodNodes = function(root) {
    let maxSoFar= root.val;
    return dfs(root, maxSoFar)

    //helper function to carry the calculation
    function dfs(node, maxSoFar){
        if(!node) return 0;
        let good= node.val >= maxSoFar ? 1 : 0
        maxSoFar= Math.max(maxSoFar, node.val);
        return good + dfs(node.left, maxSoFar) + dfs(node.right, maxSoFar)
    }

};