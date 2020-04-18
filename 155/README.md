# 155. 最小栈

## 题目链接

https://leetcode-cn.com/problems/min-stack/

## 思路

内部维护 minIdx，使得 getMin() 能够在常数时间返回 -> push、pop 时都需要判定是否需要更新 minIdx... 思路同 index.js

## 较优的解

参考：https://leetcode-cn.com/problems/min-stack/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-38/

我的方案在 pop 掉最小元素时，都得遍历栈找到新的最小元素... 有点垃圾...

### 解法 一

利用辅助栈保存最小值，栈顶保存的是当前所有元素的最小值

```
入栈 3 
|   |    |   |
|   |    |   |
|_3_|    |_3_|
stack  minStack

入栈 5 ， 5 大于 minStack 栈顶，不处理
|   |    |   |
| 5 |    |   |
|_3_|    |_3_|
stack  minStack

入栈 2 ，此时右边的 minStack 栈顶就保存了当前最小值 2 
| 2 |    |   |
| 5 |    | 2 |
|_3_|    |_3_|
stack  minStack

出栈 2，此时右边的 minStack 栈顶就保存了当前最小值 3
|   |    |   |
| 5 |    |   |
|_3_|    |_3_|
stack  minStack

出栈 5，右边 minStack 不处理
|   |    |   |
|   |    |   |
|_3_|    |_3_|
stack  minStack

出栈 3
|   |    |   |
|   |    |   |
|_ _|    |_ _|
stack  minStack

作者：windliang
链接：https://leetcode-cn.com/problems/min-stack/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-38/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

代码：

```
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.helper = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let oriLen = this.arr.length;

    this.arr.push(x);

    if (oriLen === 0 || x <= this.getMin()) {
        this.helper.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.arr.length === 0) {
        return;
    }
    
    if (this.arr.pop() === this.getMin()) {
        this.helper.pop();
        return;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len = this.arr.length;
    if (len === 0) {
        return;
    }

    return this.arr[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let len = this.helper.length;
    if (this.helper.length === 0) {
        return;
    }

    return this.helper[len - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

### 解法二

只使用一个栈

```
入栈 3 
|   |   min = 3
|   |     
|_3_|    
stack   

入栈 5 
|   |   min = 3
| 5 |     
|_3_|    
stack  

入栈 2 
| 2 |   min = 2?
| 5 |     
|_3_|    
stack

入栈 2 ，同时将之前的 min 值 3 入栈，再把 2 入栈，同时更新 min = 2
| 2 |   min = 2
| 3 |  
| 5 |     
|_3_|    
stack  

入栈 6 
| 6 |  min = 2
| 2 |   
| 3 |  
| 5 |     
|_3_|    
stack  

出栈 6     
| 2 |   min = 2
| 3 |  
| 5 |     
|_3_|    
stack  

出栈 2     
| 2 |   min = 2
| 3 |  
| 5 |     
|_3_|    
stack  

出栈 2     
|   |  min = 3   
| 5 |   
|_3_|    
stack  

```

### 解法三

使用链表实现

> 直接用一个链表即可实现栈的基本功能，那么最小值该怎么得到呢？我们可以在 Node 节点中增加一个 min 字段，这样的话每次加入一个节点的时候，我们同时只要确定它的 min 值即可。

