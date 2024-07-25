// ========= QUEUE - CIRCLE ==========
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
class CircularQueue {
  constructor(size) {
    this.items = new Array(size).fill(null);
    this.size = size;
    this.head = -1;
    this.tail = -1;
  }

  //isfull
  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }

  //isEmpty
  isEmpty() {
    return this.head === -1;
  }

  //size
  getTotalElement() {
    return this.items.filter(Boolean).length;
  }

  //enqueue
  enqueue(element) {
    if (!this.size) {
      console.log("Missing one argument in CircularQueue");
      return;
    }
    if (this.isFull()) {
      console.log(`Queue is full`);
      return false;
    }

    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (this.tail + 1) % this.size;
    this.items[this.tail] = element;
    return true;
  }
  //dequeue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    const item = this.items[this.head];
    this.items[this.head] = null;
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.size;
    }
    return item;
  }

  //peek
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[this.head];
  }

  //print
  print() {
    // console.log(this.items.filter(Boolean).toString());
    let queStr = "";
    while (this.tail !== this.head - 1) {
      queStr += this.items[this.head] + " ";
      this.head = (this.head + 1) % this.size;
    }
    // queStr += this.items[this.tail];
    console.log(queStr);

    // let i = this.head;
    // let queueStr = "";
    // while (i !== this.tail) {
    //   console.log("i-", i);
    //   queueStr += this.items[i] + " ";
    //   i = (i + 1) % this.size;
    // }
    // queueStr += this.items[this.tail];
    // console.log(queueStr);
  }
}

const que = new CircularQueue(5);
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.print();
// console.log("que.dequeue();: ", que.dequeue());

// console.log("isEmpty", que.isEmpty());
// console.log("peek", que.peek());
// console.log("size", que.getTotalElement());
// que.print();
