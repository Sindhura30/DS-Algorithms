# Graph Data Structure

This folder contains a Graph implementation in `Graph.js`.

## Overview

A Graph is a non-linear data structure consisting of vertices (nodes) connected by edges. This implementation represents an undirected graph using an adjacency list, where each vertex maintains a list of its connected vertices.

## File

- `Graph.js` - Implementation of an undirected graph with basic operations.

## Adjacency List Structure

The graph uses an object where:
- Keys are vertices
- Values are arrays of connected vertices

Example:
```javascript
{
  "A": ["B", "C"],
  "B": ["A", "D"],
  "C": ["A"],
  "D": ["B"]
}
```

## Operations

### addVertex(vertex)
Adds a new vertex to the graph.
- Creates an empty array for the vertex in the adjacency list
- Increments the vertex count

### addEdge(vertex1, vertex2)
Adds an undirected edge between two existing vertices.
- Adds vertex2 to vertex1's adjacency list
- Adds vertex1 to vertex2's adjacency list

### removeEdge(vertex1, vertex2)
Removes an undirected edge between two vertices.
- Removes vertex2 from vertex1's adjacency list
- Removes vertex1 from vertex2's adjacency list

### removeVertex(vertex)
Removes a vertex and all its connected edges.
- Removes all edges connected to the vertex
- Deletes the vertex from the adjacency list
- Decrements the vertex count

## Example Usage

```javascript
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");

console.log(graph.adjacencyList);
// Output: { A: [ 'B', 'C' ], B: [ 'A' ], C: [ 'A' ] }

graph.removeEdge("A", "B");
console.log(graph.adjacencyList);
// Output: { A: [ 'C' ], B: [], C: [ 'A' ] }

graph.removeVertex("C");
console.log(graph.adjacencyList);
// Output: { A: [], B: [] }
```

## Time Complexity

- `addVertex`: O(1)
- `addEdge`: O(1)
- `removeEdge`: O(degree of vertices) - due to array filtering
- `removeVertex`: O(degree of vertex + edges removed)

## Space Complexity

- O(V + E) where V is the number of vertices and E is the number of edges

## Notes

- This is an undirected graph, so edges are bidirectional
- Vertices must exist before adding edges between them
- The implementation does not handle weighted edges or directed graphs
- For more advanced graph algorithms (DFS, BFS, shortest paths), additional methods would need to be added