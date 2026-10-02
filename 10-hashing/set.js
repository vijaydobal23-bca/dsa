//stores always unique elements
var s = new Set();
s.add(10);
s.add(20);
s.add(30);
s.add(30);
console.log(s);

s.delete(30);
console.log(s);

console.log(s.has(10));
console.log(s.size);

// find unique elment from the array of even doublicate element.

var s = new Set();
var arr = [1,2,1,2,5,8,2,8,2,3,3];
for(let i = 0;i<arr.length;i++){
  if(s.has(arr[i])) s.delete(arr[i]);
  else s.add(arr[i]);
}
console.log(s);



// 
var arr = [1,2,3,1,5,2,2,8,8];


