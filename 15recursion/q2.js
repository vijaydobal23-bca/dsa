
let n = 3;

function towerOfHanoi(n, src, hel, des) {
  if (n == 1) {
    console.log(`Move ${n}th plate from ${src} to ${des}`);
    return;
  }

  towerOfHanoi(n - 1, src, des, hel);

  console.log(`Move ${n}th plate from ${src} to ${des}`);

  towerOfHanoi(n - 1, hel, src, des);
}

towerOfHanoi(n, "A", "B", "C");
