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
var longestZigZag = function(root) {
    let maxCount=0;
    function maxZigZagDFS(node, direction, length){
        if(!node) return ;
        
        maxCount = Math.max(maxCount, length);
        maxZigZagDFS(node.left, "left", direction === "right"? length+1 : 1)
        maxZigZagDFS(node.right, "right", direction === "left"? length+1 : 1)

    }
    if (!root) return 0;
    maxZigZagDFS(root,"left", 0)
    maxZigZagDFS(root,"right", 0)
    return maxCount;
};