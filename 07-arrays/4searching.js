//linear search

let target = 4;
let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    console.log(i);
    break;
  }
}

function binSearch(arr,target) {
  let st = 0;
  let end = arr.length - 1;

  while (st <= end) {
    let mid = Math.floor((st + end) / 2);

    if(arr[mid] ==target){
      return mid;
    }
    if (target > arr[mid]) {
      st = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

let ans = binSearch([1,3,4,5,6],5);
console.log(ans);



