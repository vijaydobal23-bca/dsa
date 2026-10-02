class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  unshift(val) {
    let newNode = new Node(val);
    this.size++;

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  push(val) {
    this.size++;
    let newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let currNode = this.head;

    while (currNode.next != null) {
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

  shift() {
    if (this.head == null) {
      console.log("List is empty");
      return;
    }

    this.head = this.head.next;
    this.size--;
  }

  pop() {
    if (this.head == null) {
      console.log("List is empty");
      return;
    }

    if (this.head.next == null) {
      this.head = null;
      this.size--;
      return;
    }

    let currNode = this.head;

    while (currNode.next.next != null) {
      currNode = currNode.next;
    }

    currNode.next = null;
    this.size--;
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.size) {
      console.log("Not a valid position");
      return;
    }

    if (pos == 0) {
      this.unshift(val);
      return;
    }

    if (pos == this.size) {
      this.push(val);
      return;
    }

    let newNode = new Node(val);
    let currNode = this.head;

    for (let i = 0; i < pos - 1; i++) {
      currNode = currNode.next;
    }

    newNode.next = currNode.next;
    currNode.next = newNode;

    this.size++;
  }

  delete(pos) {
    if (pos < 0 || pos >= this.size) {
      console.log("Not a valid position");
      return;
    }

    if (pos == 0) {
      this.shift();
      return;
    }

    if (pos == this.size - 1) {
      this.pop();
      return;
    }

    let currNode = this.head;

    for (let i = 0; i < pos - 1; i++) {
      currNode = currNode.next;
    }

    currNode.next = currNode.next.next;

    this.size--;
  }

  printList() {
    if (this.head == null) {
      console.log("List is empty");
      return;
    }

    let currNode = this.head;

    while (currNode != null) {
      process.stdout.write(currNode.data + "->");
      currNode = currNode.next;
    }

    console.log(null);
  }
}

let l = new LinkList();

l.push(10);
l.push(20);
l.push(30);

l.printList();

l.insert(1, 15);
l.printList();

l.delete(2);
l.printList();