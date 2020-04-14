# 104. 二叉树的最大深度

## 题目链接

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

## 思路

解题没想到比较好的解法的是想着去递归解决... 使用两次 for 巡皇

## 别的思路

尝试使用一次 for 循环，见 index.js

每次遍历的时候都更新历史最低点，以及最大收益

第一版提交代码（暴力）

```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    // 暴力解决一波
    if (len <= 1) {
        return 0;
    }

    let result = 0;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            result = Math.max(prices[j] - prices[i], result);
        }
    }
    return result;
};
```
