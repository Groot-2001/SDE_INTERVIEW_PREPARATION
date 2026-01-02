// using Min-Heap (Priority Queue)
class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert([num, freq]) {
        this.heap.push([num, freq]);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][1] >= this.heap[parentIndex][1]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;
            if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
                smallest = left;
            }
            if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
}

// Top k frequent elements in an array
function topKFrequent(nums, k) {
    const frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const frequencyArray = Array.from(frequencyMap.entries());

    frequencyArray.sort((a, b) => b[1] - a[1]);

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(frequencyArray[i][0]);
    }
    return result;
}

function topKFrequentUsingHeap(nums, k) {
    const frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const minHeap = new MinHeap();
    for (let [num, freq] of frequencyMap.entries()) {
        minHeap.insert([num, freq]);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.extractMin()[0]);
    }
    return result.reverse();
}

// Example usage:
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const topKElements = topKFrequent(nums, k);
console.log(`Top ${k} frequent elements:`, topKElements); // Output: [1, 2]
// Time Complexity: O(N log N) due to sorting
// Space Complexity: O(N)

const topKElementsUsingHeap = topKFrequentUsingHeap(nums, k);
console.log(`Top ${k} frequent elements using Min-Heap:`, topKElementsUsingHeap); // Output: [1, 2]
// Time Complexity: O(N log k) due to heap operations
// Space Complexity: O(N)