//Implemented Graph using Adjacent List Method

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  }
  addEdge(node1, node2) {
    // undirected Graph

    // Node or vertex doesn't exist
    if (!this.adjacentList[node1]) {
      console.warn(
        `Vertex ${node1} doesn't exist, \n  Creating This Vertex ${node1} `
      );
      this.addVertex(node1);
    }
    if (!this.adjacentList[node2]) {
      console.warn(
        `Vertex ${node2} doesn't exist, \n  Creating This Vertex ${node2} `
      );
      this.addVertex(node2);
    }
    //Node exist
    if (this.adjacentList[node1] && this.adjacentList[node2]) {
      if (!this.adjacentList[node1].includes(node2)) {
        this.adjacentList[node1].push(node2);
      }
      if (!this.adjacentList[node2].includes(node1)) {
        this.adjacentList[node2].push(node1);
      }
    }
  }
  //helper method to see the graph
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let edge;
      for (edge of nodeConnections) {
        connections += edge + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
