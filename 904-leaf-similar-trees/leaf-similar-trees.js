/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leaves1=[], leaves2=[];
    const dfs = (node, leaves)=>{
        if(node != null){
            if(node.left == null && node.right == null){
                leaves.push(node.val)
            }
            dfs(node.left, leaves);
            dfs(node.right, leaves);
        }
    }
    dfs(root1, leaves1);
    dfs(root2, leaves2);
    return (leaves1.length === leaves2.length && leaves1.every((value, index)=> value === leaves2[index]))
};