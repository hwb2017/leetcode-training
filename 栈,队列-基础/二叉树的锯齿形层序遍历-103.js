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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }
    // 记录当前层的所有节点
    let currentLevelNodes = [root];
    let result = [];
    // 记录正序或逆序的flag, 等于 true 时是正序
    let flag = true;
    while (currentLevelNodes.length > 0) {
        let nextLevelNodes = [];
        let currentLevelValues = [];
        while (currentLevelNodes.length > 0) {
            let node = currentLevelNodes.shift();
            if (flag) {
                currentLevelValues.push(node.val);
            } else {
                currentLevelValues.unshift(node.val);
            }
            if (node.left)
                nextLevelNodes.push(node.left);
            if (node.right)
                nextLevelNodes.push(node.right);
        }
        result.push(currentLevelValues);
        currentLevelNodes = nextLevelNodes;
        flag = !flag;
    }
    return result;
};