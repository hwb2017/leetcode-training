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
 var inorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    let result = [];
    // const inOrder = (node) => {
    //     if (node !== null) {
    //         inOrder(node.left);
    //         result.push(node.val);
    //         inOrder(node.right);
    //     }
    // }
    // inOrder(root);
    // return result;
    let stack = [];
    stack.unshift(root);
    while (stack.length !== 0) {
        node = stack.shift();
        if (node !== null) {
            if (typeof node === "number") {
                result.push(node);
                continue;
            }            
            stack.unshift(node.right);
            stack.unshift(node.val);
            stack.unshift(node.left);
        }
    }
    return result;
};