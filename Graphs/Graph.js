/**
 * Graph class implements an undirected graph using an adjacency list.
 * Vertices are stored as keys in the adjacency list, with their connected vertices as arrays of values.
 */
class Graph {
    /**
     * Constructor initializes an empty graph.
     */
    constructor() {
        this.adjacencyList = {};  // Object where keys are vertices and values are arrays of connected vertices
        this.vertexCount = 0;    // Tracks the number of vertices in the graph
    }

    /**
     * Adds a new vertex to the graph if it doesn't already exist.
     * @param {*} vertex - The vertex to add
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.vertexCount++;
        }
    }

    /**
     * Adds an undirected edge between two vertices.
     * Both vertices must exist in the graph.
     * @param {*} vertex1 - First vertex
     * @param {*} vertex2 - Second vertex
     */
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    /**
     * Removes an undirected edge between two vertices.
     * @param {*} vertex1 - First vertex
     * @param {*} vertex2 - Second vertex
     */
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        }
    }

    /**
     * Removes a vertex and all its connected edges from the graph.
     * @param {*} vertex - The vertex to remove
     */
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            // Remove all edges connected to this vertex
            while (this.adjacencyList[vertex].length) {
                const adjacentVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, adjacentVertex);
            }
            // Remove the vertex from the adjacency list
            delete this.adjacencyList[vertex];
            this.vertexCount--;
        }
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
        }
    }   
}
