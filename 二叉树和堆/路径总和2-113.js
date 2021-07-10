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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    if (root === null) return []
    if (root.left === null && root.right === null) {
        return root.val === targetSum ? [[root.val]] : []
    }
    let leftPaths = pathSum(root.left, targetSum - root.val)
    let rightPaths = pathSum(root.right, targetSum - root.val)
    let path = []
    if (leftPaths.length > 0) {
        for (leftPath of leftPaths) {
            path.push([root.val, ...leftPath])
        }
    }
    if (rightPaths.length > 0) {
        for (rightPath of rightPaths) {
            // console.log(rightPath)
            path.push([root.val, ...rightPath])
        }
    }
    // console.log(path)
    return path
};