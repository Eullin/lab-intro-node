class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos - 1];
    }
  }
  max() {
    // si el this.items esta vacio
    if (this.items.length !== 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
    var sum = this.items.reduce((a, b) => a + b, 0);
    var average = sum / this.length;
    return average;
    }
  }
  sum() {
    var sum = this.items.reduce((a, b) => a + b, 0);
    return sum;
  }
}

module.exports = SortedList;
