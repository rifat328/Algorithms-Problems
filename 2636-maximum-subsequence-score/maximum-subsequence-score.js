/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    // Step 1: Pair nums2 with nums1 and sort by nums2 descending
    const pairs= nums2.map((val, index)=> [val, nums1[index]]);
    pairs.sort((a,b)=>b[0] - a[0]);
    // Now pairs = [ [nums2, nums1], ... ] sorted by nums2 high → low

    // create min-heap for k largest nums1 values
    class MinHeap{
        constructor(){
            this.heap=[];
        }

        push(x){
            this.heap.push(x);
            this.bubbleUp(this.heap.length -1);
        }
        pop(){
            if(this.heap.length === 1 ){return this.heap.pop()}
            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0);
            return top;
        }
        size(){
            return this.heap.length;
        }
        bubbleUp(i){
            while(i>0){
                let parent= Math.floor((i-1)/2);
                if(this.heap[parent] <= this.heap[i] ) break;
                [this.heap[parent], this.heap[i]]= [this.heap[i], this.heap[parent]];
                i= parent;
            }
        }
        bubbleDown(i){
            const n = this.heap.length;
            while(true){
                let left = i*2 +1;
                let right= i*2 +2;
                let smallest = i;

                if ( left < n && this.heap[left] < this.heap[smallest]) smallest = left;
                if(right< n && this.heap[right] < this.heap[smallest]) smallest = right;

                if ( smallest === i ) break;
                [this.heap[i] , this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i= smallest;
            }
        }

        
    }

    const heap = new MinHeap();
        let sum =0;
        result = 0;
         // iterate over pairs.
        for(const [curMinNums2, curNums1] of pairs){
            // add nums1 to heap
            heap.push(curNums1);
            sum += curNums1;
            // if heap to big remove smallest nums1
            if(heap.size() > k){
                sum -=heap.pop();

            }
            //if heap exactly k elements , compute score
            if(heap.size() === k ){
                result = Math.max(result, sum * curMinNums2);
                
            }
        }
    
    return result;

};