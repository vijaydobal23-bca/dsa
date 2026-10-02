let prompt = require("prompt-sync")
let arr = [1,2,3,4,5];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

let brr = [...arr]
console.log(brr);

console.log(Math.round(Math.cos(90)))

let ans = 12.2
console.log(ans.toFixed(2))
prompt("Enter a number")