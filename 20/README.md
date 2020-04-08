# 20. 有效的括号

## 题目链接

https://leetcode-cn.com/problems/valid-parentheses/

## 思路

利用栈，遍历字符串时，当前值是左边部分，则 push 进数组，是右边部分，则把数组 pop 一个出来，看是否匹配，不匹配直接返回 false。

字符串遍历完后，看栈中是否有元素，如果空了，则返回 ture，否则 false

## Tips

+ js 缓存字符串 length
+ 字符串如果是奇数长度，直接返回 false 也可提高性能
