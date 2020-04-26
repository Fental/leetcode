# 203. 移除链表元素

## 题目链接

https://leetcode-cn.com/problems/remove-linked-list-elements/

## 思路

题目不难，针对链表头被删定义了一个 `result` 变量去缓存，遍历时不断更新，见代码

## 较优解法

> 通过哨兵节点去解决，哨兵节点广泛应用于树和链表中，如伪头、伪尾、标记等，他们是纯功能的，通常不保存任何数据，其主要的目的是使链表标准化，如使链表永不为空，永不无头、简化插入和删除

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head == null) {
        return head;
    }

    let result = new ListNode(null);
    let i = result;
    let j = head;
    i.next = j;

    while (j != null) {

        if (j.val === val) {
            i.next = j.next;
            j = j.next;
        } else {
            i = j;
            j = j.next;
        }
    }

    return result.next;
};
```
