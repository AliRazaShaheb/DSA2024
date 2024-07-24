// ========= STACK - ARRAY ==========
/*
Last-in first-out (LIFO)
example:
1) plate stacking example. last plate will be removed first in order to empty bucket.
2) editing software Undo machansim
3) some application store actions in order to to go back to previouse state
4) browser history navigation with back button 
5) call stack function call

*/
class Stack {
  constructor() {
    this.items = [];
  }

  //push
  push(element) {
    this.items.push(element);
  }
  //pop
  pop() {
    return this.items.pop();
  }

  //isEmpty
  isEmpty() {
    return this.items.length === 0;
  }

  //peek
  peek() {
    return this.items[this.items.length - 1];
  }

  //size
  size() {
    return this.items.length;
  }
  //print
  print() {
    console.log(this.items.toString());
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
