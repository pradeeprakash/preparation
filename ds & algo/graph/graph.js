// console.log(reverseBetween(head, 2, 4));
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // For undirected graph
  }

  // DFS Recursive
  dfsRecursive(start, visited = new Set()) {
    if (!start) return;

    console.log(start); // Visit the vertex
    visited.add(start);

    for (const neighbor of this.adjacencyList[start]) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited);
      }
    }
  }

  bfsRecursive(start, visited = new Set()) {
    if (!start) return;

    console.log(start); // Visit the vertex
    visited.add(start);

    for (const neighbor of this.adjacencyList[start]) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited);
      }
    }
  }

  // DFS Iterative
  dfsIterative(start) {
    const stack = [start];
    const visited = new Set();
    visited.add(start);

    while (stack.length > 0) {
      const vertex = stack.pop();
      console.log(vertex); // Visit the vertex

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }

  bfsIterative(start) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex); // Visit the vertex

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// Usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log("DFS Recursive:");
// graph.dfsRecursive("A");

console.log("DFS Iterative:");
// graph.bfsIterative("A");
