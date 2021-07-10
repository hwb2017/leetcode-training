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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    if (root === null) return null
    let count = 0
    let stack = [];
    stack.unshift(root);
    while (stack.length !== 0) {
        node = stack.shift();
        if (node !== null) {
            if (typeof node === "number") {
                if (++count === k) return node
                continue;
            }            
            stack.unshift(node.right);
            stack.unshift(node.val);
            stack.unshift(node.left);
        }
    }
};