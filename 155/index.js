/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.minIdx = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
 
    if (this.minIdx < 0) {
        this.minIdx = 0;
        return;
    }

    if (x <= this.arr[this.minIdx]) {
        this.minIdx = this.arr.length - 1;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.arr.length === 0) {
        return;
    }

    const top = this.arr.pop();
    
    if (top > this.arr[this.minIdx]) {
        return;
    }

    let len = this.arr.length;
    if (len === 0) {
        this.minIdx = -1;
        return;
    }

    let minPair = {value: this.arr[0], idx: 0};
    for (let i = 0; i < len; i++) {
        if (this.arr[i] <= minPair.value) {
            minPair.value = this.arr[i];
            minPair.idx = i;
        }
    }
    this.minIdx = minPair.idx;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.arr.length === 0) {
        return;
    }

    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.arr.length === 0) {
        return;
    }

    return this.arr[this.minIdx];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */