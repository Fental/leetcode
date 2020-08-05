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
var swapPairs = function(head) {
    if (head == null) {
        return null;
    }

    if (head.next == null) {
        return head;
    }

    let last = null;
    let result = head.next;
    while (head) {

        if (head.next == null) {
            break;
        }

        // a - b - c
        // a = b c
        // b - a - c
        let c = head.next.next;
        let b = head.next;
        let a = head;
        b.next = a;
        a.next = c;

        if (last != null) {
            last.next = b;
        }

        last = a;
        head = c;
    }
    
    return result;
};