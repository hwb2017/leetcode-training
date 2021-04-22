class SortedArray {
    constructor(length) {
      this.length = length;
      this.arr = new Array();
    }
    insert(item) {
      if (this.arr.length == 0) {
          this.arr.push(item);
          return;
      }
      let i = this.arr.length - 1;
      for (i; i >= 0; i--) {
          if (this.arr[i] <= item) {
              break;
          } else {
              this.arr[i+1] = this.arr[i];
          }
      }
      this.arr[i+1] = item;
      if (this.arr.length > this.length) {
          this.arr = this.arr.slice(this.arr.length - this.length);
      }
    }
    delete(item) {
      let index = this.arr.indexOf(item);
      if (index > -1) {
        this.arr.splice(index, 1);
        return true;
      }
      console.warn(`item ${item} does not exists`);
      return false;
    }
    update(oldItem, newItem) {
      if (this.delete(oldItem)) {
        this.insert(newItem)
      }
    }
}