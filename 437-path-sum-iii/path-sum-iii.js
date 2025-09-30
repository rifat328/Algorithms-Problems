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