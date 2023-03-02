class Queue {
  items: any[]

  constructor() {
    this.items = [];
  }

  push(item: any) {
    this.items.push(item);
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  shift() {
    return this.items.shift();
  }

  last() {
    return this.items[this.size() - 1];
  }

  first() {
    return this.items[0];
  }

  middle() {
    if (!this.isEmpty) {
      return this.items[Math.floor(this.size() / 2)]
    }
  }
}
