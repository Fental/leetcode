/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root == null) {
        return null;
    }

    let tmp = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(tmp);
    return root;
};