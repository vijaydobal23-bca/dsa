//print this pattern

// *
// * *
// * * *

var ans = "";
let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    ans += "* ";
  }
  ans += "\n";
}

console.log(ans);

// print this
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function printRightTriangleNumbers(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}

// print this
// A
// A B
// A B C
// A B C D
// A B C D E

function printRightTriangleAlphabets(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(64 + j) + " ");
    }

    console.log();
  }
}

// * * * * *
// * * * *
// * * *
// * *
// *

function printInvertedRightTriangle(n) {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }

    console.log();
  }
}

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function printMirroredRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }

    // Print stars
    for (let k = 1; k <= i; k++) {
      process.stdout.write("* ");
    }

    console.log();
  }
}


// * *
//  * 
// * *
function printXShapePattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == j || i + j == n + 1) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

printXShapePattern(5);

//   * 
//  * *
// * * *

function printPyramid(n){
  let nsp=n-1;
  let nst = 1;

  for(let i = 1;i<=n;i++){
    for(let j= 1;j<=nsp;j++){
      process.stdout.write("  ");
    }

    for(let k = 1;k<=nst;k++){
      process.stdout.write("* ");
    }
    console.log("");
    nst+=2;
    nsp--;
  }
}
printPyramid(5);

function reversePyramid(n){
  let nst = 2*n-1;
  let nsp = 0;
  for(let i = 1;i<=n;i++){
    for(let j =1;j<=nsp;j++){
      process.stdout.write("  ")
    }

    for(let k= 1;k<=nst;k++){
      process.stdout.write("* " );
    }
    nst-=2;
    nsp++;
    console.log();
  }
}

reversePyramid(5);