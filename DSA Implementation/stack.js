class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    //return the top element of the stack
    return this.top;
  }
  push(value) {
    //add an element to the top of the stack
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
      this.length++;
    }
    return this;
  }
  pop() {
    //remove an element from the top of the stack since it follows LIFO
    if (!this.top) {
      return null;
    }
    const poppedNode = this.top;
    this.top = poppedNode.next;
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return poppedNode.value;
  }
}

const myStack = new Stack();
console.log(myStack.push(1));

console.log("----------------");

console.log(myStack.push(2));
console.log("----------------");
console.log(myStack.peek());

console.log("---------------- after peek");
console.log(myStack.pop());
console.log(`Entire Stack: ${JSON.stringify(myStack.peek())}`);
console.log("----------------");
// 1 2 3 4 5   queue is better with Linked list because of shift and unshift operations
// 1 2 3 4
