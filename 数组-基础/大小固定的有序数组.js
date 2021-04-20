class SortedArray {
    constructor(length) {
      this.length = length;
      this.arr = new Array(length);
    }
    insert(item) {
      if (this.arr.length == 0) {
          this.arr.push(item);
      }
      let i = this.arr.length - 1;
      for (i; i >= 0; i--) {
          if (this.arr[i] <= item) {
              break;
          } else {
              a[i+1] = a[i];
          }
      }
      a[i+1] = item;
      if (this.arr.length > this.length) {
          this.arr = this.arr.slice(this.arr.length - this.length);
      }
    }
}