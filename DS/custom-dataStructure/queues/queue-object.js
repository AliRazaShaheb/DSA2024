// ========= QUEUE - OBJECT ==========
/*
First-in first-out (FIFO)
............................................
-> [in]   [element]     [element]     -> [out]
............................................
example:
1) executing customer orders
2) people lineup for bus, for buying tickets, taking foods etc.
3) executing task in order such as CPU processing task, web server handling requests, printer printing queues etc.
4) vehicle lineup in toll naka, or in traffic signals

*/
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  //enqueue
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  //dequeue
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  //isEmpty
  isEmpty() {
    return this.rear - this.front === 0;
  }
  //peek
  peek() {
    return this.items[this.front];
  }

  //size
  size() {
    return this.rear - this.front;
  }
  //print
  print() {
    console.log(Object.values(this.items).toString());
  }
}

const que = new Queue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.dequeue();

console.log("size", que.size());
// console.log("isEmpty", que.isEmpty());
// console.log("peek", que.peek());
que.print();
