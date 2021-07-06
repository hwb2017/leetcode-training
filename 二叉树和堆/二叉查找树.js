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
    // 寻找树中大于给定节点值的最小节点，即给定节点右子树中的最小节点
    ceil(node) {
      if (node.right === null) return null;
      let current = node.right;
      while(current !== null) {
          if (current.left === null) return current;
          current = current.left
      }
    }
    // 寻找树中小于给定节点值的最大节点，即给定节点左子树中的最大节点
    floor(node) {
      if (node.left === null) return null;
      let current = node.left;
      while (current !== null) {
          if (current.right === null) return current;
          current = current.right;
      }
    }
    find(val, current = this.root) {
        if (current === null) return null
        if (current.val === val) {
            return current
        }
        if (current.val < val) {
            return this.find(val, current.right)
        } else if (current.val < val) {
            return this.find(val, current.left)
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

(function test() {
    let bst = new BinaryTree()
    bst.insert(7)
    bst.insert(5)
    bst.insert(9)
    bst.insert(3)
    bst.insert(11)
    console.log(bst.levelOrderPrint())
    let node = bst.find(9)
    console.log(bst.ceil(node))
})()