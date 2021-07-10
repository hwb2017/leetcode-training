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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    return _isBalanced(root)[0]
};

const _isBalanced = (root) => {
    if (root === null) return [true,0]
    if (root.left === null && root.right === null) {
        return [true,1]
    }
    let [ isLeftBalanced, leftHeight ] = _isBalanced(root.left)
    let [ isRightBalanced, rightHeight ] = _isBalanced(root.right)
    let flag = Math.abs(leftHeight-rightHeight) <=1 && isLeftBalanced && isRightBalanced
    // console.log(root.val, leftHeight, rightHeight, flag)
    if (flag) {
        return [flag, Math.max(leftHeight, rightHeight)+1]
    } else {
        return [flag, null]
    }
};