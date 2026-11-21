let list = [];
let n = 4;
for (let i = 0; i < n; i++) {
  list[i] = [];
}

function Graph(u, v, isDirected) {
  if (isDirected) list[u].push(v);
  else {
    list[u].push(v);
    list[v].push(u);
  }
}

Graph(0, 1, false);
Graph(0, 2, false);
Graph(0, 3, false);
(Graph(1, 2), false);
Graph(1, 3, false);
Graph(2, 3, false);

list.map((l,i) => {
  console.log(`${i} -> `,l);
});
