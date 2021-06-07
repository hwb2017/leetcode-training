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
 var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    let result = [];
    // const postOrder = (node) => {
    //     if (node !== null) {
    //         postOrder(node.left);
    //         postOrder(node.right);
    //         result.push(node.val);
    //     }
    // }
    // postOrder(root);
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
            stack.unshift(node.val);
            stack.unshift(node.right);
            stack.unshift(node.left);
        }
    }
    return result;
};