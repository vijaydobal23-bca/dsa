var map = new Map();
map.set("ajay" ,5);
map.set("amit" , 7);
map.set("aman" ,3);

console.log(map);

//deleting for the  map
map.delete("ajay");
console.log(map);


console.log(map.get("amit"));
console.log(map.has("amit"));
console.log(map.size);
for(let keys of map.keys()){
  console.log(keys , map.get(keys));
}



// get the frequency of a number
var arr = [1,2,3,4,5,2,1,34,1,4,5];
var map = new Map();

for(let i=0;i<arr.length;i++){
  if(map.has(arr[[i]])){
    let freq = map.get(arr[1]) +1;
    map.set(arr[i] , freq);

  }

  else {
    map.set(arr[i] ,1);
  }
}


console.log(map);
