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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    let result = [];
    // const preOrder = (node) => {
    //     if (node !== null) {
    //         result.push(node.val);
    //         preOrder(node.left);
    //         preOrder(node.right);
    //     }
    // }
    // preOrder(root);
    // return result;
    let stack = [];
    stack.unshift(root);
    while (stack.length !== 0) {
        node = stack.shift();
        if (node !== null) {
            result.push(node.val);
            stack.unshift(node.right);
            stack.unshift(node.left);
        }
    }
    return result;
};