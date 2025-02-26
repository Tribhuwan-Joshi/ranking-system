class MaxHeap {
  constructor() {
    this.heap = [];
    this.participantIndices = new Map(); // Maps participant.id to their index in the heap
  }

  push(participant) {
    this.heap.push(participant);
    this.participantIndices.set(participant.id, this.heap.length - 1);
    this.heapifyUp(this.heap.length - 1);
  }

  updateScore(participantId, newScore) {
    const index = this.participantIndices.get(participantId);
    if (index === undefined) return;

    const oldScore = this.heap[index].score;
    this.heap[index].score = newScore;

    if (newScore > oldScore) {
      this.heapifyUp(index);
    } else if (newScore < oldScore) {
      this.heapifyDown(index);
    }
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].score >= this.heap[index].score) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown(index) {
    const length = this.heap.length;
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let swapIdx = null;

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx].score > this.heap[index].score
      ) {
        swapIdx = leftChildIdx;
      }
      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx].score >
          (swapIdx === null
            ? this.heap[index].score
            : this.heap[leftChildIdx].score)
      ) {
        swapIdx = rightChildIdx;
      }

      if (swapIdx === null) break;
      this.swap(index, swapIdx);
      index = swapIdx;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    this.participantIndices.set(this.heap[i].id, i);
    this.participantIndices.set(this.heap[j].id, j);
  }

  toArray() {
    return [...this.heap].sort((a, b) => b.score - a.score);
  }
}

module.exports = MaxHeap;
