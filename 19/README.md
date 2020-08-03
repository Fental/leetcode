# 19. 删除链表的倒数第N个节点

## 题目链接

https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

## 思路

题目说要一次遍历，我的方法是空间换时间... 蠢死了

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head == null) {
        return null;
    }

    let nodes = [];
    let tmp = head;
    while (tmp) {
        nodes.push(tmp);
        tmp = tmp.next;
    }

    let len = nodes.length;
    if (n > len) {
        return head;
    }

    if (len - n === 0) {
        return head.next;
    } else {
        nodes[len - n - 1].next = nodes[len - n].next;
        return head;
    }
};
```

## 较优化的解法

双指针，见 index.js

![动画描述](https://pic.leetcode-cn.com/cc43daa8cbb755373ce4c5cd10c44066dc770a34a6d2913a52f8047cbf5e6e56-file_1559548337458)