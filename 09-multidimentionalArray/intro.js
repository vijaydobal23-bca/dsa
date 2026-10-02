let oneDArr = [1,2,3,4,5,6];
let twoDArr =  [[[10,20,30,40],[10,11,13,14]]]
console.log(twoDArr);


let arr = new Array(3);
for(let i = 0;i<arr.length;i++){
  arr[i] = new Array(2);
}

for(let i = 0;i<3;i++){
  for(let j = 0;j<3;j++){
    console.log(arr[i][j]);
  }
}

var newArr = Array.from({length:3},()=>{
  return new Array(3).fill(0)
})
console.log(newArr)