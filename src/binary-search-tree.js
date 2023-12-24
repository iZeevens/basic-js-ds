const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);

    if (!this._root) {
      return (this._root = node);
    }

    let curr = this._root;

    while (curr) {
      if (node.data < curr.data) {
        if (!curr.left) {
          curr.left = node;
          return node;
        }

        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = node;
          return node;
        }

        curr = curr.right;
      }
    }
  }

  has(data) {
    let curr = this._root;

    while (curr) {
      if (curr.data === data) {
        return true;
      }

      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return false;
  }

  find(data) {
    let curr = this._root;

    while (curr) {
      if (curr.data === data) {
        return curr;
      }

      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return null;
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

module.exports = {
  BinarySearchTree,
};
