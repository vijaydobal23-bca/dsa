function calculateGCD() {
  //brute fource approach

  let a = 20;
  let b = 36;

  let gcd = 1;
  for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
      break;
    }
  }

  console.log(gcd);
}



function calculateGCD(){
  
}
