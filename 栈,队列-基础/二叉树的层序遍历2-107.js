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
 var levelOrderBottom = function(root) {
    if (root === null) {
        return [];
    }
    // 记录当前层的所有节点
    let currentLevelNodes = [root];
    let result = [];
    while (currentLevelNodes.length > 0) {
        let nextLevelNodes = [];
        let currentLevelValues = [];
        while (currentLevelNodes.length > 0) {
            let node = currentLevelNodes.shift();
            currentLevelValues.push(node.val);
            if (node.left)
                nextLevelNodes.push(node.left);
            if (node.right)
                nextLevelNodes.push(node.right);
        }
        result.unshift(currentLevelValues);
        currentLevelNodes = nextLevelNodes;
    }
    return result;
};