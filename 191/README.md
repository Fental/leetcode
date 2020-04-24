# 191. 位1的个数

## 题目链接

https://leetcode-cn.com/problems/number-of-1-bits/

## 思路

遍历二进制字符串

## 位操作

```
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let times = 32;
    let result = 0;

    while (times--) {
        if ((n & 1) === 1) {
            result++;
        }
        n = n >>> 1;
    }

    return result;
};
```
