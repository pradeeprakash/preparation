class Heap {
  constructor() {
    this.heap = [];
  }

  len() {
    return this.heap.length;
  }

  getLeftNodeIndex(pIndex) {
    return pIndex * 2 + 1;
  }

  getRightNodeIndex(pIndex) {
    return pIndex * 2 + 2;
  }

  getParentNodeIndex(cIndex) {
    return Math.floor((cIndex - 1) / 2);
  }

  push(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  shift() {
    if (this.len() === 0) throw "Heap is Empty";
    let item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  peek() {
    return this.heap[0];
  }

  print() {
    console.log(this.heap);
  }

  swap(i1, i2) {
    let temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  heapifyUp() {
    if (this.len() === 1) return;
    let cIndex = this.len() - 1;

    while (cIndex) {
      let pIndex = this.getParentNodeIndex(cIndex);
      if (this.heap[pIndex] > this.heap[cIndex]) {
        this.swap(pIndex, cIndex);
      } else {
        break;
      }
      cIndex = pIndex;
    }
  }

  heapifyDown() {
    let pIndex = 0;

    while (true) {
      let lIndex = this.getLeftNodeIndex(pIndex);
      let rIndex = this.getRightNodeIndex(pIndex);
      let smallest = pIndex;

      if (lIndex < this.len() && this.heap[lIndex] < this.heap[smallest]) {
        smallest = lIndex;
      }

      if (rIndex < this.len() && this.heap[rIndex] < this.heap[smallest]) {
        smallest = rIndex;
      }

      if (smallest !== pIndex) {
        this.swap(pIndex, smallest);
        pIndex = smallest;
      } else {
        break;
      }
    }
  }
}

var findKthLargest = function (nums, k) {
  const h1 = new Heap();
  nums.forEach((i) => {
    h1.push(i);
    if (h1.len() > k) {
      h1.shift();
    }
  });
  h1.print();
  return h1.peek();
};

console.log(
  findKthLargest(
    [
      3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7,
      8, 5, 6,
    ],
    20
  )
);
