# 88. 合并两个有序数组

## 题目链接

https://leetcode-cn.com/problems/merge-sorted-array/

## 思路

双指针，双指针如果都从 0 往后，则需要先腾出 nums m 个位置，所以需要 O(m) 的空间复杂度

## 较优解

看了题解，没想到可以双指针都从后往前，有效利用 nums 后的有效长度，现在 index.js 里就是这个思路

第一版提交代码

```
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let k = 0;
    let len = m + n;

    let tmp = [];
    for (k = 0; k < m; k++) {
        tmp.push(nums1[k]);
    }

    for (k = 0; k < len; k++) {
        if (j === n || tmp[i] < nums2[j]) {
            nums1[k] = tmp[i];
            i++;
        } else if (i === m || tmp[i] >= nums2[j]) {
            nums1[k] = nums2[j];
            j++;
        }
    }
};

```
