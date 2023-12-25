const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    return this.elements[this.head];
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.tail === 0) {
      this.elements[this.tail] = newNode;
      this.head = this.tail;
    } else {
      this.elements[this.tail - 1].next = newNode;
      this.elements[this.tail] = newNode;
    }

    this.tail++;
  }

  dequeue() {
    const value = this.elements[this.head].value;
    delete this.elements[this.head];
    this.head++;

    return value;
  }
}

module.exports = {
  Queue,
};
