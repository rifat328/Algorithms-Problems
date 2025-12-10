class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftIndex(i) {
    return 2 * i + 1;
  }
  getRightIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      let parent = this.getParentIndex(i);

      if (this.heap[parent] <= this.heap[i]) break;

      this.swap(parent, i);
      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    if (this.heap.length === 0) return null;

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return root;
  }

  heapifyDown() {
    let i = 0;
    const n = this.heap.length;

    while (true) {
      let left = this.getLeftIndex(i);
      let right = this.getRightIndex(i);
      let smallest = i;

      if (left < n && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < n && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === i) break;

      this.swap(i, smallest);
      i = smallest;
    }
  }

  peek() {
    return this.heap[0] ?? null;
  }
}

const pq = new MinHeap();

pq.push(5);
pq.push(1);
pq.push(8);
pq.push(3);

console.log(pq.pop()); // 1
console.log(pq.pop()); // 3
