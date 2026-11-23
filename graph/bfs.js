
let list = [];
let n = 4;

for (let i = 0; i < n; i++) {
  list[i] = [];
}

function Graph(u, v, isDirected) {
  if (isDirected) {
    list[u].push(v);
  } else {
    list[u].push(v);
    list[v].push(u);
  }
}

Graph(0, 1, false);
Graph(0, 2, false);
Graph(0, 3, false);
Graph(1, 2, false);
Graph(1, 3, false);
Graph(2, 3, false);

function bfs(adjList) {
  let q = [];
  let isVisited = new Array(adjList.length).fill(false);
  let ans = [];

  q.push(0);
  isVisited[0] = true;

  while (q.length !== 0) {
    let temp = q.shift();

    ans.push(temp);

    for (let i = 0; i < adjList[temp].length; i++) {
      let nebour = adjList[temp][i];

      if (!isVisited[nebour]) {
        q.push(nebour);
        isVisited[nebour] = true;
      }
    }
  }

  return ans;
}

console.log(bfs(list));
