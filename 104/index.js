/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }

    let arr = [{node: root, len: 1}];
    let item = null;
    let maxLen = 1;

    while ((item = arr.shift()) != null) {
        maxLen = Math.max(maxLen, item.len);
        item.node.left != null && arr.push({node: item.node.left, len: item.len + 1});
        item.node.right != null && arr.push({node: item.node.right, len: item.len + 1});
    }

    return maxLen;
};
