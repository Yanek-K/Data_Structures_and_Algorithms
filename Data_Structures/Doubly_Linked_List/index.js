// Almost identical to a Singly Linked List but every node has a pointer
// to the previous item

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

let list = new Node(12);
list.next = new Node(13);
list.next.prev = list;
