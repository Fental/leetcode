# 437. 路径总和 III

## 题目链接

https://leetcode-cn.com/problems/path-sum-iii/

## 思路

直接看代码 index.js 吧

## 其他思路

双递归

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 双递归
var helper = function (root, sum) {

    if (root == null) {
        return 0;
    }

    sum -= root.val;
    return (sum === 0 ? 1 : 0) + helper(root.left, sum) + helper(root.right, sum);
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {

    if (root == null) {
        return 0;
    }

    return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

```

TODO 其他解法
