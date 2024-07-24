class Stack {
  constructor() {
    this.items = {};
    this.head = 0;
  }

  push(element) {
    this.items[this.head] = element;
    this.head++;
  }

  pop() {
    const item = this.items[this.head - 1];
    delete this.items[this.head - 1];
    this.head--;
    return item;
  }

  isEmpty() {
    return this.head === 0;
  }

  peek() {
    return this.items[this.head - 1];
  }

  size() {
    return this.head;
  }

  print() {
    console.log(Object.values(this.items).toString());
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
stack.print();
