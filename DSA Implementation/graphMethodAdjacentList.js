//Implemented Graph using Adjacent List Method

class Grapph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {}
  addEdge(node1, node2) {
    // undirected Graph
  }
  //helper method to see the graph
  showConnections() {
    const allNodes = object.keys(this.adjacentList);
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

const myGraph = new Grapph();
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
