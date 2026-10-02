let prime = new Array(n+1).fill(true);


for (let i=2;i<=Math.sqrt(n);i++){
  if(prime[i]){
      for(let j =i*i;j<=n;j+=i){
          prime[j] = false;
      }
  }
}

for(let i = 2;i<=n;i++){
  consoe.log(prime[i]);
}