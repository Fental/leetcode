# 104. 二叉树的最大深度

## 题目链接

https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

## 思路

用递归。talk cheap, show code...

## 别的思路

官方题解说用 dfs，实际上代码里用的是 bfs 的思路... （参考这个 [链接](https://blog.csdn.net/weixin_40953222/article/details/80544928) 了解 bfs 和 dfs）

bfs 思路代码见 index.js

不过题解里对于递归的空间复杂度写的挺好的，递归要考虑保持调用栈的存储...

第一版提交代码（递归）

```
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

    if (root.left == null && root.right == null) {
        return 1;
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

```
