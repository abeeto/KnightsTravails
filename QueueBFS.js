export default class QueueBFS {
  constructor() {
    this.items = [];
  }
  enqueue(origin, current, cost) {
    this.items.push({ origin, current, cost });
  }
  dequeue() {
    return this.items.length > 0 ? this.items.shift() : "This queue is empty";
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.join(" -> "));
  }
}
