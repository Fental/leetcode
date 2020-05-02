# 232. 用栈实现队列

## 题目链接

https://leetcode-cn.com/problems/implement-queue-using-stacks/

## 思路

### 解法一

抖机灵解法，js 中的 Array 本来可是用作栈或者队列...

```
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.arr = [];
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
    return this.arr.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.arr[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.arr.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

### 解法二

单栈 + 索引。索引初始化为 0，队列 pop 时，索引++

```
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.arr = [];
    this.startIdx = 0;
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
    if (this.arr[this.startIdx] == null) {
        return;
    }

    result = this.arr[this.startIdx];
    this.arr[this.startIdx] == null;
    this.startIdx++;
    return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.arr[this.startIdx];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.arr.length === 0 || (this.arr.length - this.startIdx) === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

### 解法三

看了题解，双栈1

栈 FILO，两个栈负负得正 hhh

```
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
    if (this.empty()) {
        this.arr.push(x);
        return;
    }

    let tmp;
    while ((tmp = this.arr.pop()) != null) {
        this.helper.push(tmp);
    }
    this.arr.push(x);
    while ((tmp = this.helper.pop()) != null) {
        this.arr.push(tmp);
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.arr.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.arr[this.arr.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.arr.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

### 解法四

同样也是双栈，但这个解法有个 “摊还” 的概念

> 摊还分析给出了所有操作的平均性能，摊还分析的核心在于，最坏情况下的操作一旦发生了一次，那么再未来很长时间都不会再次发生，这样就会均摊每次操作的代价

第一次出队操作代价很大，但是每 n 次入队才产生一次。平摊下来，每次操作的平均时间复杂时时 O(1)

```
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
```
