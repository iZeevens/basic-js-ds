const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    const node = new Node(data);

    if (!this.root) {
      return (this.root = node);
    }

    let curr = this.root;

    while (curr) {
      if (node.data < curr.data) {
        if (!curr.left) {
          return (curr.left = node);
        }

        curr = curr.left;
      } else {
        if (!curr.right) {
          return (curr.right = node);
        }

        curr = curr.right;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

// const bst = new BinarySearchTree();
// bst.add(7);
// bst.add(1);
// bst.add(5);

module.exports = {
  BinarySearchTree,
};
