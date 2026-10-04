class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add at beginning
  unshift(val) {
    let newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.size++;
  }

  // Add at end
  push(val) {
    let newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.size++;
  }

  // Remove from beginning
  shift() {
    if (this.head == null) return null;

    let value = this.head.val;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return value;
  }

  // Remove from end
  pop() {
    if (this.tail == null) return null;

    let value = this.tail.val;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return value;
  }

  // Insert at a specific index
  insert(index, val) {
    if (index < 0 || index > this.size) return false;

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.size) {
      this.push(val);
      return true;
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    let newNode = new Node(val);

    newNode.prev = curr.prev;
    newNode.next = curr;

    curr.prev.next = newNode;
    curr.prev = newNode;

    this.size++;
    return true;
  }

  // Remove at a specific index
  remove(index) {
    if (index < 0 || index >= this.size) return null;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.size - 1) {
      return this.pop();
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    this.size--;

    return curr.val;
  }

  // Get node at index
  get(index) {
    if (index < 0 || index >= this.size) return null;

    let curr;

    // Start from the closer side
    if (index < this.size / 2) {
      curr = this.head;

      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
    } else {
      curr = this.tail;

      for (let i = this.size - 1; i > index; i--) {
        curr = curr.prev;
      }
    }

    return curr;
  }

  // Update value at index
  set(index, val) {
    let node = this.get(index);

    if (node == null) return false;

    node.val = val;
    return true;
  }

  // Find value
  find(val) {
    let curr = this.head;
    let index = 0;

    while (curr != null) {
      if (curr.val === val) {
        return index;
      }

      curr = curr.next;
      index++;
    }

    return -1;
  }

  // Reverse the list
  reverse() {
    let curr = this.head;

    while (curr != null) {
      let temp = curr.next;

      curr.next = curr.prev;
      curr.prev = temp;

      curr = temp;
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  // Print from head to tail
  printForward() {
    let curr = this.head;
    let result = [];

    while (curr != null) {
      result.push(curr.val);
      curr = curr.next;
    }

    console.log(result.join(" <-> "));
  }

  // Print from tail to head
  printBackward() {
    let curr = this.tail;
    let result = [];

    while (curr != null) {
      result.push(curr.val);
      curr = curr.prev;
    }

    console.log(result.join(" <-> "));
  }

  // Check if empty
  isEmpty() {
    return this.head == null;
  }

  // Get length
  length() {
    return this.size;
  }

  // Clear entire list
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}