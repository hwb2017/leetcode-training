/**
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
  this.size = size
  this.list = []
  this.lastSum = 0
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.list.push(val)
  const _list = this.list.slice(-this.size)
  const subValue = this.list[this.list.length-this.size-1] ?? 0
  this.lastSum = this.lastSum + val - subValue
  const average =  this.lastSum / _list.length
  return average
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */