//count digits

// var n = 1234;
// console.log(n.toString().length);

// let count = 0;
// var n = 1234;

// while (n > 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(count);

// //sum of deigits of a number
// var n = 12345;
// let arr = n.toString().split("");
// let ans = arr.reduce((acc, val, idx) => {
//   console.log(acc, val);
//   return (acc += Number(val));
// }, 0);

// console.log(ans);

// var n = 1234;
// var sum = 0;
// while (n > 0) {
//   sum += n % 10;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// //armStrong number
// let num = 153;

// let power = num.toString().length;

// var sum = num
//   .toString()
//   .split("")
//   .reduce((a, b) => a + Number(b) ** power, 0);

// console.log(sum == num);

// //let isPalindrome =
// n.toString() === n.toString().split("").reverse().join("");

// console.log(isPalindrome);

// //strong number

// let fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

// let num = 145;

// let sum = num
//   .toString()
//   .split("")
//   .reduce((a, b) => a + fact[b], 0);

// console.log(sum == num);

// let ans = n
//   .toString()
//   .split("")
//   .sort((a, b) => a - b)
//   .join("");

// console.log(ans);

// //freq of a digit
// let freq = {};

// n.toString()
//   .split("")
//   .forEach((x) => {
//     freq[x] = (freq[x] || 0) + 1;
//   });

// console.log(freq);

// //reverse of a number
// function reverseNumber(n) {
//   let rev = Number(n.toString().split("").reverse().join(""));
//   return rev;
// }
