/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if (root == null) {
        return [];
    }

    if (root.left == null && root.right == null) {
        return [root.val];
    }

    let result = [];
    let maxCnt = 0;
    let cnt = 0;
    let pre = null;

    let helper = function (root) {
        if (root == null) {
            return;
        }

        if (root.left != null) {
            helper(root.left);
        }

        if (pre == null) {
            pre = root.val;
        } else if (pre === root.val) {
            cnt++;
        } else {
            if (cnt > maxCnt) {
                result = [pre];
                maxCnt = cnt;
            } else if (cnt === maxCnt) {
                result.push(pre);
            }

            cnt = 0;
            pre = root.val;
        }

        if (root.right) {
            helper(root.right);
        }
    }

    // 边中序遍历边判断，二叉树特性：中序遍历结果非递减
    helper(root);
    
    // 递归没办法判断最后一个元素，得再判定一遍
    if (cnt > maxCnt) {
        result = [pre];
    } else if (cnt === maxCnt) {
        result.push(pre);
    }

    return result;
};