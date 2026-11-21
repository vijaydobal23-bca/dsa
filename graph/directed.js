
let n = 5;

const matrix = Array.from({ length: n }, () => Array(n).fill(0));

function buildGraph(u, v, matrix, isDirected = false) {
    matrix[u][v] = 1;

    // If graph is undirected, add reverse edge too
    if (!isDirected) {
        matrix[v][u] = 1;
    }
}

// Directed Graph
buildGraph(0, 1, matrix, true);
buildGraph(0, 2, matrix, true);
buildGraph(0, 3, matrix, true);

buildGraph(1, 2, matrix, true);
buildGraph(1, 3, matrix, true);

buildGraph(2, 3, matrix, true);

console.log(matrix);
