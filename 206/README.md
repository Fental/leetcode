# 206. 反转链表

## 题目链接

https://leetcode-cn.com/problems/reverse-linked-list/

## 思路

见代码

## 笨办法

数组保存链表 hhh，我的第一次提交就是这个方法

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null) {
        return null;
    }

    let arr = [];
    
    while (head != null) {
        arr.push(head);
        head = head.next;
    }

    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        arr[i].next = i === 0 ? null : arr[i - 1];
    }

    return arr[len - 1];
};
```

## 其他解法

递归，TODO

https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode/
