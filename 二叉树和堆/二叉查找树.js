class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        if (this.root === null) {
            this.root = new TreeNode(val);
            return   
        }
        let current = this.root;
        while (true) {
            if (val < current.val) {
                if (current.left === null) {
                    current.left = new TreeNode(val);
                    break
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = new TreeNode(val);
                    break
                }                
                current = current.right
            }
        }
    }
    levelOrderPrint() {
        if (this.root === null) {
            return [];
        }
        // 记录当前层的所有节点
        let currentLevelNodes = [this.root];
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
            result.push(currentLevelValues);
            currentLevelNodes = nextLevelNodes;
        }
        return result;        
    }
}