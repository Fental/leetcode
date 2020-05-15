/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head1 = l1;
    let head2 = l2;
    let result = null;
    let head3 = null;

    while (head1 != null || head2 != null || carry !== 0) {
        let val = (head1 == null ? 0 : head1.val) + (head2 == null ? 0 : head2.val) + carry;
        carry = val > 9 ? 1 : 0;
        let node = new ListNode(val % 10);

        if (result == null) {
            result = node;
            head3 = node;
        } else {
            head3.next = node;
            head3 = node;
        }

        if (head1 != null) {
            head1 = head1.next;
        }

        if (head2 != null) {
            head2 = head2.next;
        }
    }

    return result;
};