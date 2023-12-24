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

  remove(data) {
    this._root = removeBinary(this._root, data);

    function removeBinary(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeBinary(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeBinary(node.right, data);
      } else {
        if (!node.left && !node.right) {
          return node = null
        }

        if (!node.left) {
          node.right = node
          return node
        }

        if (!node.right) {
          node.left = node
          return node
        }
      }
    }
  }

  min() {
    let curr = this._root;

    while (curr.left !== null) {
      curr = curr.left;
    }

    return curr.data;
  }

  max() {
    let curr = this._root;

    while (curr.right !== null) {
      curr = curr.right;
    }

    return curr.data;
  }
}

module.exports = {
  BinarySearchTree,
};
