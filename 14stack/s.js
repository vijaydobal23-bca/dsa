class Stack {
  constructor() {
    this.size = 0;
    this.arr = [];
  }

  push(val) {
    this.size++;
    this.arr.push(val);
  }

  pop() {
    if (this.size <= 0) {
      console.log("The stack is empty");
      return;
    }

    this.arr.pop();
    this.size--;
  }

  print() {
    console.log(this.arr);
  }
}

const s = new Stack();

s.push(10);
s.push(20);
s.push(30);

s.print();

s.pop();

s.print();