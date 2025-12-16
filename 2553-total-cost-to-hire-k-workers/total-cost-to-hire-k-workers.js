/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    //minHeap template.
    class MinHeap{
        constructor(compare = (a,b)=> a - b){
            this.heap=[];
            this.compare = compare;
        }
        size(){
        return this.heap.length;
        }
        peek(){ return this.heap[0]}
        push(val){
        this.heap.push(val); //insertion so , heapifyUp
        this._heapifyUp(this.size() -1);
        }
        pop(){
         if (this.size() === 1) return this.heap.pop();
        let top = this.peek();
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return top;

        }
        _heapifyUp(index){
            while(index > 0){
                let parent = (index - 1) >> 1; // basically (index - 1) / 2 = parent index
                if(this.compare(this.heap[index], this.heap[parent]) >= 0) break;
                [this.heap[index], this.heap[parent]]=[ this.heap[parent], this.heap[index]];
                index = parent;
            }

        }
        _heapifyDown(index){
            const n = this.size();
            while(true){
                let left= index*2 +1 ,right= index*2 +2;
                let smallest = index;
                if(left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
                if(right < n && this.compare(this.heap[right], this.heap[smallest] ) < 0 ) smallest = right ;

                 if ( smallest === index) break;
                [this.heap[index], this.heap[smallest]] = [ this.heap[smallest] , this.heap[index]]
                index = smallest;
            
            }
           
        }
        
    }

    // Main logical code:
    const n = costs.length;
    const compare = (a,b)=>{
        if(a[0] !== b[0]) return a[0] - b[0]; // cost smallest first decending order
        return a[1] - b[1] // tie break by index order. which one is smaller.
    }
    
    const leftHeap= new MinHeap(compare);
    const rightHeap= new MinHeap(compare);

    let l = 0;
    let r = n - 1;
    let total = 0;

    //fill the left heap from i to to total canditate number 
    for (let i = 0; i < candidates && l <= r; i++) {
    leftHeap.push([costs[l], l]);
    l++;
    }
    //fill the left heap from costs.length -1  to total canditate number inword
    for (let i = 0; i < candidates && l <= r; i++) {
    rightHeap.push([costs[r], r]);
    r--;
    }

    // hired per session 1 , total session = k
    for( let hired =0; hired < k ; hired++){
         const takeLeft = rightHeap.size() === 0 ||
      (leftHeap.size() > 0 && (leftHeap.peek()[0] < rightHeap.peek()[0] ||
        (leftHeap.peek()[0] === rightHeap.peek()[0] &&
            leftHeap.peek()[1] < rightHeap.peek()[1])));


        if (takeLeft) {
            const [cost] = leftHeap.pop();
            total += cost;

            if (l <= r) {
                leftHeap.push([costs[l], l]);
                l++;
            }
        } else {
            const [cost] = rightHeap.pop();
            total += cost;
            if (l <= r) {
                rightHeap.push([costs[r], r]);
                r--;
            }
        }

    }

    return total;
};