# 263. 丑数

## 题目链接

https://leetcode-cn.com/problems/ugly-number/

## 思路

递归

```
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 1 || num === 2 || num === 3 || num === 5) {
        return true;
    }

    if (num === 0) {
        return false;
    }

    return (
        (num % 2 === 0 && isUgly(num / 2))
        || (num % 3 === 0 && isUgly(num / 3))
        || (num % 5 === 0 && isUgly(num / 5))
    );
};
```
