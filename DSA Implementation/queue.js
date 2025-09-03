class Node {
  constructor(value) {
    this.value = value;
    this.next = this.next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    const dequeuedNode = this.first;
    this.first = dequeuedNode.next;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return { "Dequeue Value": dequeuedNode.value, length: this.length };
  }
}

const myQueue = new Queue();
console.log(myQueue.peek());
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue("google"));
console.log(myQueue.enqueue(4));
console.log(myQueue.dequeue());
