class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let curr = this.root;

    while (true) {
      if (val < curr.data) {
        if (curr.left === null) {
          curr.left = newNode;
          return;
        }
        curr = curr.left;
      } 
      else {
        if (curr.right === null) {
          curr.right = newNode;
          return;
        }
        curr = curr.right;
      }
    }
  }

  printTree(node = this.root) {
    if (node === null) return;

    console.log(node.data);

    this.printTree(node.left);
    this.printTree(node.right);
  }
}

// Usage
let tree = new Tree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

tree.printTree();