# 190. 颠倒二进制位

## 题目链接

https://leetcode-cn.com/problems/reverse-bits/

## 思路

从右往左遍历，将 i 放到 31 - i 的位置，i 从 0 开始
第一版写的并非位操作

```
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let s2 = Number(n).toString(2);
    let resultS2 = '';
    let last = s2.length - 1;

    for (let i = 0; i < 32; i++) {
        resultS2 += '' + ((last - i) < 0 ? 0 : s2[last - i]);
    }
    return parseInt(resultS2, 2);
};
```

## 位操作

https://www.w3school.com.cn/js/pro_js_operators_bitwise.asp

有符号右移！！！