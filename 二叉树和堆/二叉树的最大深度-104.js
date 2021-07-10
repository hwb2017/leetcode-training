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
 var maxDepth = function(root) {
    if (root === null) return 0
    let maxDepth = 0
    let nodeStack = []
    root.depth = 1
    nodeStack.unshift(root)
    while (nodeStack.length > 0) {
        let node = nodeStack.shift()
        if (node.left === null && node.right === null) {
            maxDepth = Math.max(maxDepth, node.depth)
        } else {
            if (node.left) {
                let nextNode = node.left
                nextNode.depth = node.depth+1
                nodeStack.unshift(nextNode)
            }
            if (node.right) {
                let nextNode = node.right
                nextNode.depth = node.depth+1
                nodeStack.unshift(node.right)    
            }
        }
   }
   return maxDepth
};