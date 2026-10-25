
function sort(arr) {
  if (arr.length == 0) return arr;

  let a = arr.pop();
  sort(arr);
  placeAtRight(a, arr);

  return arr;
}

function placeAtRight(a, arr) {
  if (arr.length == 0 || arr[arr.length - 1] <= a) {
    arr.push(a);
    return;
  }

  let x = arr.pop();
  placeAtRight(a, arr);
  arr.push(x);
}

let arr = [1, 4, 2, 3, 6, 5];
let ans = sort(arr);
console.log(ans);
