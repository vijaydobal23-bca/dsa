function bubbleSort(arr) {}
console.log("Arrays");


function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

function insertionSort(arr){
  for(let i = 1;i<arr.length;i++){
    let key = arr[i];
    let j = i-1;

    while( j>=0 && arr[j]>key){
      arr[j+1] =  arr[j];
      j--;
    }

    arr[j+1] = key;
  }

  console.log(arr);
}

console.log(selectionSort([1, 2, 3, 6, 4, 5]));
insertionSort([1,2,4,3,7,6,5]);