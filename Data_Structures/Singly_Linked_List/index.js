// LISTS COMPARED WITH ARRAYS

// LISTS
// * Do not have indexes
// * Connected via nodes with a next pointer
// * Random access is not allowed
// * A collection of nodes
// * Foundation for Stacks and Queues

// ARRAYS
// * Indexed in order
// * Insertion and deletion can be expensive
// * Can quickly be accessed at a specific index

// BIG O of Lists =>
// • Insertion - O(1)
// • Removal - O(1) at the beginning / O(n) at the end
// • Searching - O(n)
// • Access - O(n)

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
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(val) {
    if (val < 0 || val > this.length) return null;
    let node = this.head;
    while (val > 0) {
      node = node.next;
      val--;
    }
    return node;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    var newNode = new Node(val);
    let prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let foundNode = this.get(index - 1);
    let removed = foundNode.next;
    foundNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = tempHead.next;
      tempHead.next = prev;
      prev = tempHead;
      tempHead = next;
    }
    return this;
  }
}

list = new SinglyLinkedList();
list.push("Hello");
list.push("Mate");
list.push("Alright?");
list.push("end");

console.log(list);
