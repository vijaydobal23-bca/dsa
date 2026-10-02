//swapping of two numbers

const swap = (a,b)=>{
  let temp = a;
  a = b;
  b = temp;
  return (
    {
      a,b
    }
  )
}

let ans = swap(10,20);
console.log(ans.a);
console.log(ans.b);