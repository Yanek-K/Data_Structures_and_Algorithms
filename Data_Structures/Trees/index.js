// ** TREES ** //

// BIG O OF TREES //
// Insertion O()
// Removal O()
// Searching O()
// Access O()

//  ** USES ** //
// HTML + DOM
// Network Routing
// Abstract Syntax Trees
// Artificial Intelligence
// Folders in Operating Systems
// JSON

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
}

var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
tree.insert(16);