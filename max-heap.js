class MaxHeap {
  constructor() {
    this.heap = [];
    this.indexMap = new Map(); // Map participant ID to heap index
  }

  insert(id, score) {
    this.heap.push({ id, score });
    this.indexMap.set(id, this.heap.length - 1);
    this.heapifyUp(this.heap.length - 1);
  }

  top() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  getSorted() {
    return [...this.heap].sort((a, b) => b.score - a.score);
  }

  updateScore(id, newScore) {
    const index = this.indexMap.get(id);
    if (index === undefined) return;

    this.heap[index].score = newScore;
    this.heapifyUp(index);
    this.heapifyDown(index);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].score >= this.heap[index].score) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown(index) {
    const length = this.heap.length;
    while (true) {
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < length && this.heap[left].score > this.heap[largest].score) {
        largest = left;
      }
      if (right < length && this.heap[right].score > this.heap[largest].score) {
        largest = right;
      }
      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    this.indexMap.set(this.heap[i].id, i);
    this.indexMap.set(this.heap[j].id, j);
  }
}

module.exports = MaxHeap;
