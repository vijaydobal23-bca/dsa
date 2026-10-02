//sum of elements
var arr = [10,20,30,40];
var sum = arr.reduce((acc,val)=>{
  return acc+val
});

console.log(sum);

//max element
var arr = [10,20,88,30,50];
var max = arr.reduce((acc,val,idx)=>{
  return acc > val?acc:val;
})

console.log(max);

var max = Math.max(...arr);
console.log(max);

var arr = [-10,-3,-5,-6];
var max = arr[0];
for(let i = 0;i<=arr.length;i++){
  if(arr[i]>max){
    max = arr[i];
  }
}

console.log(max);

var arr = [1,2,3,6,4,5];
console.log(arr.sort()[arr.length-1]);


function findGreatestElementAndIndex(arr) {
    let max = Math.max(...arr);
    return [max , arr.indexOf(max)]
    
}


//second max element of the array
var arr = [1,2,4,3,5,6,7];
var max = arr[0];
var smax = 0;
for(let i =0;i<arr.length;i++){
  if(arr[i]>max){
    smax = max;
    max = arr[i];
  }
}

console.log(smax);


var arr = [1,2,3,4,5,6];
var max = arr.sort();
console.log(arr[arr.length-2]);

//reverse the array

var arr = [20,45,78,95,34];
let temp = new Array(arr.length);

for(let i = arr.length-1;i>=0;i--){
  temp[arr.length-1-i] = arr[i];
}

console.log(temp);

var i = 0;
var j = arr.length-1;

while(i<j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;;
  i++;
  j--;
}

console.log(arr)

var arr = [1,2,3,4,5];
console.log(arr.reverse());


//left rotation by one

var arr = [1,2,3,4,5];
var t = arr[0];
for(let i = 1;i<arr.length;i++){
  arr[i-1] = arr[i];
}

arr[arr.length-1] = t;
console.log(arr);

//right rotation by one
function rightRotation(){

console.log("Rigtt rotation")
let arr = [1,2,3,4,5];
let t = arr[arr.length-1];

for(let i = arr.length-2;i>=0;i--){
  arr[i+1] = arr[i];
}

arr[0] = t;
console.log(arr);

}

rightRotation();

function KRotation(arr , k){
  console.log(" K rotation")
  console.log(arr);
  for(let i = 0;i<k%10;i++){
    arr.push(arr.shift())
    
  }
  console.log(arr);
}
KRotation([1,2,3,4,5],3);



  var rotate = function(arr, k) {
    const n = arr.length;
    k %= n;
    while (k--) {
        arr.unshift(arr.pop());
    }
    return arr;
};









