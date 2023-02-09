/** Node: node for a queue. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for (let val of vals) this.push(val);

  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size = this.size + 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {

    let removedItem;

    if (this.size == 0) {
      throw new Error('no value to remove')
    } else {
      removedItem = this.first
      this.first = this.first.next
      this.size = this.size - 1;
    }
    return removedItem.val
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    if (this.size == 0) {
      throw new Error('no value to remove')
    } else {
      let peekValue = this.first.val
      return peekValue
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    if (this.size == 0) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Queue;


let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue()

console.log(q)