class Queue {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  enqueue(val) {
    this.size++;
    this.arr.push(val);
  }

  dequeue() {
    if (this.size <= 0) {
      return "Queue is empty";
    }

    this.size--;
    return this.arr.shift();
  }

  reverse(q) {
    if (q.length === 0) {
      return;
    }

    let val = q.shift();

    this.reverse(q);

    q.push(val);
  }
}

let q = new Queue();

q.enqueue(10);
q.enqueue(12);
q.enqueue(20);
q.enqueue(30);

q.dequeue();

q.reverse(q.arr);

console.log(q.arr);