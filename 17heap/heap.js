
class minHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);

      if (this.heap[parent] > this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else {
        return;
      }
    }
  }
}

let hp = new minHeap();

hp.insert(20);
hp.insert(10);
hp.insert(30);

console.log(hp.heap);
