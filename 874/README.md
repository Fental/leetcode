# 575. 分糖果

## 题目链接

https://leetcode-cn.com/problems/distribute-candies/

## 思路

如果糖果种类 kinds 超过 len / 2，则均分妹妹能获得的最大种类数是 len / 2，否则则是 kinds

见 index.js

额外说一句，用 `Set` 耗时会比遍历数组计算 kinds 短，布吉岛为啥。。。
