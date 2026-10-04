class Queue{
  constructor(){
    this.arr = [];
    this.size = 0;
  }


  enqueue(val){
    this.size++;
    this.arr.push(val);
  }

  dequeue(){
    if(this.size <=0){
      return "Queue is empty";
    }
    this.size--;
    this.arr.shift();
  }


}


let q = new Queue();
q.enqueue(10);
q.enqueue(12);
q.dequeue();
console.log(q.arr);