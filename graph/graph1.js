let n = 5;

const matrix = Array.from({ length: n }, () => Array(n).fill(0));
console.log(matrix)


function buildGraph(u , v , matrix){
  matrix[u][v] = 1;
  matrix[v][u] = 1;
}


buildGraph(0,1,matrix);
buildGraph(0,2,matrix);
buildGraph(0,3,matrix);
buildGraph(1,2,matrix);
buildGraph(1,3,matrix);
buildGraph(2,3,matrix);

console.log(matrix)
