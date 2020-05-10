# 501. 二叉搜索树中的众数

## 题目链接

https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/

## 思路

最开始的解法是直接 bfs 遍历树，然后用 hash 计数... 完全没有用到二叉树的特点，感觉就是暴力

比较优的解法看 index.js


附带暴力解法

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
 * @return {number[]}
 */
var findMode = function(root) {
    let hash = {};
    let queue = [root];
    let cur;

    if (root == null) {
        return [];
    }

    while ((cur = queue.shift()) != null) {
        hash[cur.val] = hash[cur.val] == null ? 0 : hash[cur.val] + 1;
        cur.left != null && queue.push(cur.left);
        cur.right != null && queue.push(cur.right);
    }

    let result = Object.entries(hash).sort((x, y) => y[1] - x[1]);
    let cnt = result[0][1];

    return result.filter(item => item[1] === cnt).map(item => item[0]);
};
```
