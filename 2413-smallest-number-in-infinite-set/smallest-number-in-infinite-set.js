
var SmallestInfiniteSet = function() {
    this.current=1;
    this.minHeap = [];
    this.set = new Set(); // to track what's in heap
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if(this.minHeap.length > 0){
        let smallest = this._popHeap();
        this.set.delete(smallest);
        return smallest;
    }
    return this.current++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(num < this.current && !this.set.has(num)){
        this._pushHeap(num);
        this.set.add(num)
    }

};

// healper function for min heap.
SmallestInfiniteSet.prototype._pushHeap = function(x){
 // when we are inserting we perform heapify up 
    this.minHeap.push(x)
    let i = this.minHeap.length -1 // last index.

    while(i > 0){
        let parent = Math.floor( (i-1) / 2 );
        if(this.minHeap[parent] <= this.minHeap[i]) break;
        // otherwise swap
        [this.minHeap[parent], this.minHeap[i]] = [this.minHeap[i], this.minHeap[parent]];

        i= parent;
    }

}
SmallestInfiniteSet.prototype._popHeap = function(){
    let heap = this.minHeap;
    let top = heap[0];
    let last = heap.pop();
    if(heap.length > 0){
         heap[0]= last;
        let i=0;
        while(true){
        const left= (2*i) +1;
        const right= (2*i) +2;
        let smallest = i;
        if(left < heap.length && heap[left] < heap[smallest]) smallest = left;
        if(right < heap.length && heap[right] < heap[smallest]) smallest = right;
        if(smallest === i) break;
         
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]]; // swaping mechanisom.
        i = smallest;

        }
        
    }
    return top;
}

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */