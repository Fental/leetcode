/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.arr = [];
    this.helper = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let len = this.helper.length;

    if (len !== 0) {
        return this.helper.pop();
    }

    let tmp;
    while ((tmp = this.arr.pop()) != null) {
        this.helper.push(tmp);
    }
    return this.helper.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let len = this.helper.length;

    if (len !== 0) {
        return this.helper[len - 1];
    }

    return this.arr[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.arr.length === 0 && this.helper.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */