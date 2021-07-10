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
 var sumOfLeftLeaves = function(root) {
    let sum = 0
    const _sumOfLeftLeaves = (root) => {
        if (root === null) return
        if (root.left === null && root.right === null) return
        if (root.left === null) return _sumOfLeftLeaves(root.right)
        if (root.left.left === null && root.left.right === null) {
            sum += root.left.val
            return _sumOfLeftLeaves(root.right)
        }
        return _sumOfLeftLeaves(root.left) + _sumOfLeftLeaves(root.right)
    }    
    _sumOfLeftLeaves(root)
    return sum
};
