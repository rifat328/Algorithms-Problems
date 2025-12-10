/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 
var findKthLargest = function(nums, k) {

    class MinHeap{
    constructor(){
        this.heap=[];
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    left(i){
        return (i*2) + 1;
    }
    right(i){
        return (i*2) + 2;
    }
    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] 
    }
    push(val){
        this.heap.push(val);
        let i = this.heap.length -1;

        while(i> 0 && this.heap[i] < this.heap[this.parent(i)]){
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }

    }
    pop(){
        if(this.heap.length === 1 ) return this.heap.pop();
        let top= this.heap[0]
        this.heap[0]= this.heap.pop();
        this.heapifyDown();
        return top;
    }
// Starting at the root:
// Look at left child.
// Look at right child.
// Pick the smallest of the three.
// If child is smaller → swap downward.
// Continue until heap property restored.
    heapifyDown(){
        let n= this.heap.length;
        let i=0
        while(true){
            let left=this.left(i), right=this.right(i);
            let smallest=i;

            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === i) break;

            this.swap(i, smallest);
            i = smallest;
        }

    }
    peek(){return this.heap[0]}
    size(){return this.heap.length}

 }


    let heap = new MinHeap();
    for(let num of nums){
        heap.push(num);
        if(heap.size() > k){
            heap.pop()
        }
    }
   return heap.peek();
};