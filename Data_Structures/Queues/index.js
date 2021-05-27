// ** QUEUE ** //

// ** FIRST IN FIRST OUT ** //

// BIG O OF QUEUES //
// Insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)

//  ** USES ** //
// Background Tasks
// Uploading Resources
// Printing/Task Processing

// Array Implementation
// UNSHIFT -> POP, PUSH -> SHIFT =>=> O(n) time

// Singly Linked List Implementation
// ## Add to the end and remove from the beginning or Enqueue and Dequeue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let oldHead = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return oldHead.value;
  }
}

let q = new Queue();
q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");
