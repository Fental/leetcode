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

    let cnt = 0;
    let p = new ListNode(0);
    let q = new ListNode(0);

    p.next = head;
    q.next = head;
    while (q) {
        if (cnt > n) {
            p = p.next;
        }
        cnt++;
        q = q.next;
    }

    if (p.next === head) {
        return head.next;
    } else {
        p.next = p.next.next;
    }

    return head;
};