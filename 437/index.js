/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let cnt = 0;

    if (root == null) {
        return cnt;
    }

    let queue = [{node: root, rests: [sum]}];
    let cur = null;

    while ((cur = queue.shift()) != null) {
        cnt += cur.rests.filter(rest => cur.node.val === rest).length;

        let rests = [sum].concat(cur.rests.map(rest => rest - cur.node.val));
        cur.node.left && queue.push({node: cur.node.left, rests: rests});
        cur.node.right && queue.push({node: cur.node.right, rests: rests});
    }

    return cnt;
};
