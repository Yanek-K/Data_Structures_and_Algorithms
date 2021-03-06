// ** TREES ** //

// BIG O OF TREES //
// Insertion O(log n)
// - not guaranteed - if root is small and nodes are larger - becomes a linked list
// Removal O()
// Searching O(log n)
// - not guaranteed - if root is small and nodes are larger - becomes a linked list
// Access O()

//  ** USES ** //
// HTML + DOM
// Network Routing
// Abstract Syntax Trees
// Artificial Intelligence
// Folders in Operating Systems
// JSON

// BFS or DFS ? Which is better 
// Time complexity is the same
// Space complexity, wide - DFS is better, deep - BFS is better

// Reasons for different DFS methods
// 

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (value === current.value) return current;
      if (value < current.value && current.left !== null) {
        current = current.left;
      } else if (value > current.value && current.right !== null) {
        current = current.right;
      } else return false;
    }
  }
  BFS() {
    let queue = [];
    let nodes = [];
    let rootNode = this.root;
    queue.push(rootNode);
    while (queue.length) {
      rootNode = queue.shift();
      nodes.push(rootNode.value);
      if (rootNode.left) queue.push(rootNode.left);
      if (rootNode.right) queue.push(rootNode.right);
    }
    return nodes;
  }
  DFSPreOrder() {
    // Visit node, then explore entire left side and then the right side
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    // Traverse entire branch - left and right - then visit the node
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    // Traverse entire left side, visit the node, then visit the entire right side
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
