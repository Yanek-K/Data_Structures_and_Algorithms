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
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(val) {
    if (val < 0 || val >= this.length) return null;
    let node;
    if (val <= this.length / 2) {
      node = this.head;
      while (val > 0) {
        node = node.next;
        val--;
      }
    } else {
      let count = this.length - 1;
      node = this.tail;
      while (count != val) {
        node = node.prev;
        count--;
      }
    }
    return node;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    else {
      let beforeNode = this.get(index - 1);
      let newNode = new Node(val);
      let afterNode = beforeNode.next;

      (beforeNode.next = newNode), (newNode.prev = beforeNode);
      (newNode.next = afterNode), (afterNode.prev = newNode);
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    else {
      let foundNode = this.get(index);
      let beforeNode = foundNode.prev;
      let afterNode = foundNode.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      (foundNode.prev = null), (foundNode.next = null);
      this.length--;
      return foundNode;
    }
  }
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
