/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
 var NestedIterator = function(nestedList) {
    this.nestedList = nestedList;
    this.stack = [];
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    while (true) {
        if (this.stack.length === 0) {
            this.stack.unshift(this.nestedList.shift());
        }
        if (this.stack[0] === undefined) {
            return false;
        }   
        if (this.stack[0] instanceof NestedInteger && this.stack[0].isInteger())
            break
        if (typeof this.stack[0] === "number")
            break;
        // let rest = this.stack.slice(1);   
        // this.stack = this.stack[0].getList();
        // this.stack = this.stack.concat(rest);
        let temp = this.stack.shift().getList();
        this.stack = temp.concat(this.stack);
        // console.log(this.stack);
    }
    return this.stack.length + this.nestedList.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    let result;
    if (this.stack[0] instanceof NestedInteger) {
        result = this.stack[0].getInteger();
    } else {
        result = this.stack[0]
    }
    this.stack.shift();
    return result;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/