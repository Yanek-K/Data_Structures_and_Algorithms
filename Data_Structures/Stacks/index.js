// ** STACK ** //

// ** LAST IN FIRST OUT ** //

//  ** USES ** //
// Manage function invocations
// UNDO/REDO
// History object in browser

// Array Implementation
// UNSHIFT -> SHIFT, POP -> PUSH

// Singly Linked List Implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let first = this.first;
      this.first = newNode;
      newNode.next = first;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let first = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = first.next;
      first.next = null;
    }
    this.size--;
    return first.val;
  }
}

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
