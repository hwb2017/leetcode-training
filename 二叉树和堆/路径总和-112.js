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
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (root === null) return false
    let nodeStack = []
    root.sum = root.val
    nodeStack.unshift(root)
    while (nodeStack.length > 0) {
        let node = nodeStack.shift()
        if (node.left === null && node.right === null) {
            if (node.sum === targetSum) return true
        } else {
            if (node.left) {
                let nextNode = node.left
                nextNode.sum = node.sum+nextNode.val
                nodeStack.unshift(nextNode)
            }
            if (node.right) {
                let nextNode = node.right
                nextNode.sum = node.sum+nextNode.val
                nodeStack.unshift(node.right)    
            }
        }
   }
   return false
};