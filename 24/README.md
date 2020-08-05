# 24. 两两交换链表中的节点

## 题目链接

https://leetcode-cn.com/problems/swap-nodes-in-pairs/

## 思路

每两个节点为一组，进行遍历，

```
// 1. prev - a(head) - b - c
// 2. prev - a = b c
//       prev
//        |
// 3. b - a - c
// 4. prev - b - a - c(head)
```

见 index.js
