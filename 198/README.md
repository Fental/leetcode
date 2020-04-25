# 198. 打家劫舍

## 题目链接

https://leetcode-cn.com/problems/house-robber/

## 思路

动态规划 `dp[i] = Math.max(dp[i - 1], dp[i - 2] + i)`
