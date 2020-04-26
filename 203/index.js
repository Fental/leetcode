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

    let i = null;
    let j = head;
    let result = head;

    while (j != null) {

        if (j.val === val) {
            let tmp = j;
            if (i == null) {
                j = j.next;
            } else {
                i.next = j.next;
                j = j.next;
            }
            tmp.next = null;

            // 如果 head 被删除，更新 head
            if (tmp === result) {
                result = (i === null ? j : i)
            }
        } else {
            i = j;
            j = j.next;
        }
    }

    return result;
};