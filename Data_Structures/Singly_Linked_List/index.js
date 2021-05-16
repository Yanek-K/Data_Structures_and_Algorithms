// LISTS COMPARED WITH ARRAYS

// LISTS
// * Do not have indexes
// * Connected via nodes with a next pointer
// * Random access is not allowed
// * A collection of nodes

// ARRAYS
// * Indexed in order
// * Insertion and deletion can be expensive
// * Can quickly be accessed at a specific index

// ** List Class Begins Here ** //
// requires a piece of data and a reference to the next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

list = new SinglyLinkedList();
list.push("Hello");
list.push("Mate");
list.push("Alright?");
