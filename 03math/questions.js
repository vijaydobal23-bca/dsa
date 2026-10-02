//compound interst
let p = 10000;
let t = 3;
let r =5;

let cp = p*(Math.pow(1+(r/100),t))-p;
console.log(cp);

//genrate opt

 function generateOpt(){
  let ans = "";
  for(let i = 0;i<4;i++){
    ans+= Math.floor(Math.random()*10);
  }
  return ans;
 };

 const ans = generateOpt();
 console.log(ans);


 //Area of trangle using heron formula
function calculateTriangleArea(a, b, c) {
    // Semi-perimeter
    const s = (a + b + c) / 2;

    // Area using Heron's Formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example
const area = calculateTriangleArea(3, 4, 5);

console.log("Area of Triangle:", area);



