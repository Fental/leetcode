# 17. 电话号码的字母组合

## 题目链接

https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

## 思路

递归，`d[i] = f(s[i], d[i - 1])`，答案见 index.js

题解中提到的回溯是另一种解法，但本题并没有涉及剪枝，就不写对应解法了