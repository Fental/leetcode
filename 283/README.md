# 283. 移动零

## 题目链接

https://leetcode-cn.com/problems/move-zeroes/

## 思路

见 index.js

## 其他思路

双指针，和 leetcode 题解不一样 hhh

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;

    let i = 1;
    let j = 0;

    for (; i < len; i++) {
        if (nums[i] !== 0 && nums[j] === 0) {
            nums[j] = nums[i];
            nums[i] = 0;
            j++;
        } else if (nums[j] !== 0) {
            j++;
        }
    }

};
```
