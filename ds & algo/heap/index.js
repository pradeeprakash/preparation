class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get the parent index of a given index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index of a given index
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get the right child index of a given index
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swap two elements in the heap
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // Heapify up: maintain the min-heap property from a specific index to the root
  heapifyUp(index) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // Heapify down: maintain the min-heap property from a specific index to the leaf
  heapifyDown(index) {
    let currentIndex = index;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      let smallestIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (currentIndex !== smallestIndex) {
        this.swap(currentIndex, smallestIndex);
        currentIndex = smallestIndex;
      } else {
        break;
      }
    }
  }

  // Insert a new element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove and return the minimum element from the heap
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  // Get the minimum element without removing it
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }
}

// Example usage:

const minHeap = new MinHeap();

minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(1);

console.log("Heap size:", minHeap.size()); // Output: 4

console.log("Min element:", minHeap.peek()); // Output: 1

console.log("Extract Min:", minHeap.extractMin()); // Output: 1

console.log("Heap size after extraction:", minHeap.size()); // Output: 3
