// ========= QUEUE - ARRAY ==========
/*
First-in first-out (FIFO)
example:
1) executing customer orders
2) people lineup for bus, for buying tickets, taking foods etc.
3) executing task in order such as CPU processing task, web server handling requests, printer printing queues etc.
4) vehicle lineup in toll naka, or in traffic signals

*/
class Queue {
  constructor() {
    this.items = [];
  }
  // enqueue
  enqueue(element) {
    this.items.push(element);
  }
  //dequeue
  dequeue() {
    return this.items.shift();
  }

  //isEmpty
  isEmpty() {
    return this.items.length === 0;
  }

  //peek
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
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

const que = new Queue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.dequeue();
// console.log("que.isEmpty();: ", que.isEmpty());
// console.log("que.size();: ", que.size());
console.log("que.peek();: ", que.peek());
que.print();
