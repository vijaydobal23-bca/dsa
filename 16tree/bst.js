
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(root, val) {
    if (root == null) {
      return new TreeNode(val);
    }

    if (root.val > val) {
      root.left = this.insert(root.left, val);
    }
    else {
      root.right = this.insert(root.right, val);
    }

    return root;
  }

  LDR(root) {
    if (root == null) return;

    this.LDR(root.left);
    console.log(root.val);
    this.LDR(root.right);
  }
}

const t = new BST();

t.root = t.insert(t.root, 10);
t.root = t.insert(t.root, 20);
t.root = t.insert(t.root, 30);

t.LDR(t.root);
