//move zeros
var arr = [1, 0, 1, 0, 1, 0];
var brr = [];

for (const x of arr) {
    if (x !== 0) brr.push(x);
}

while (brr.length < arr.length) {
    brr.push(0);
}

console.log(brr); 


var arr = [ 1,0,1,0,1,1,0];
console.log(arr.sort().reverse());


//multiplication of previous and next   
var arr = [1,2,3,4,5];
let ans = [];
for(let i = 0;i<arr.length;i++){
    if(!arr[i-1]){
        ans[i] = arr[i]*arr[i+1];
    }

    else if(!arr[i+1]){
        ans[i] = arr[i]* arr[i-1];
    }

    else{
        ans[i] = arr[i-1]*arr[i+1];
    }
}

console.log(arr);
console.log(ans);

//sun if absolute difference

function sumOfAbsDiff(arr) {
    let sum = 0n;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let diff = arr[i] - arr[j];

        // Absolute value for BigInt
        if (diff < 0n) {
          diff = -diff;
        }

        sum += diff;
      }
    }

    return sum;
  }

function sortHalves(arr) {
        let st = 0;
        let end = arr.length-1;
        let mid = Math.floor((arr.length)/2);

        for(let i = 0;i<mid;i++){

            for(let j=i+1;j<mid;j++){
                if(arr[i]>arr[j]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp; 
                }
            }
        }

        for(let i = mid;i<arr.length;i++){
            for(let j = i+1;j<arr.length;j++){
                if(arr[i]<arr[j]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

    return arr;
    }   
