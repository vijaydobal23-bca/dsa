function merge(arr, st, end, mid) {
  let temp = [];
  let i = st, j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  // Remaining elements of left half
  while (i <= mid) {
    temp.push(arr[i++]);
  }

  // Remaining elements of right half
  while (j <= end) {
    temp.push(arr[j++]);
  }

  // Copy sorted elements back
  for (let i = 0; i < temp.length; i++) {
    arr[i + st] = temp[i];
  }
}


function mergeSort(arr, st, end) {
  if (st < end) {
    let mid = Math.floor((st + end) / 2);

    mergeSort(arr, st, mid);
    mergeSort(arr, mid + 1, end);

    merge(arr, st, end, mid);
  }
}


// Print answer
let arr = [38, 12, 27, 43, 9, 31, 18, 25];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);