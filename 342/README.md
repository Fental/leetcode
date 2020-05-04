# 342. 4的幂

## 题目链接

https://leetcode-cn.com/problems/power-of-four/

## 思路

常规解法递归，见 index.js

## 其他思路

位运算，分析二进制数发现规律

```
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return num > 0 && ((num & (num - 1)) === 0) && ((num & 0xaaaaaaaa) === 0)
};
```
