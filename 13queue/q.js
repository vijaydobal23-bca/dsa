class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;

    while (temp.next != null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  dequeue() {
    if (this.head == null) {
      return "Queue is empty";
    }

    let value = this.head.val;
    this.head = this.head.next;

    return value;
  }

  printQueue() {
    let curr = this.head;

    while (curr != null) {
      process.stdout.write(curr.val + " ");
      curr = curr.next;
    }

    console.log();
  }
}


// Example
let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.printQueue(); // 10 20 30

console.log(q.dequeue()); // 10

q.printQueue(); // 20 30