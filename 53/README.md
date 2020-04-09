# 53. 最大子序和

[TOC]

## 题目链接

https://leetcode-cn.com/problems/maximum-subarray/

## 思路

凭直觉和以前的经验，一上手就用 “贪心” 了思路。虽然代码写出来了，但是还是和别人讲不明白...

## 官方讲解

官方给出了三种方法来解决这个问题 **贪心** **分治** **动态规划**，有个[图示讲解](https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-cshi-xian-si-chong-jie-fa-bao-li-f/)看了能让人觉得好理解些

### 1. 贪心

> 使用单个数组作为输入来查找最大（或最小）元素（或总和）的问题，贪心算法是可以在线性时间解决的方法之一
>
> 每一步都选择最佳方案，到最后就是全局最优的方案

talk cheap，show code

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    let sum = nums[0];

    if (len === 1) {
        return sum;
    }

    let maxSum = sum;
    for (let i = 1; i < len; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};
```

### 2. 分治

> 为解决一个给定的问题，算法需要一次或多次的递归调用其自身来解决相关的子问题，即我们把一个大规模的问题划分为 n 个规模较小而结构与原来相似的子问题，递归解决这些子问题，然后再合并其结果，这样就得到了最终的结果
>
> 从步骤上来讲，可以分为三步：
>
> 分解（Divide）：将一个问题为 N 的问题分解成一系列子问题；
>
> 解决（Conquer）：递归处理每个子问题，如果子问题足够小，则直接给出解；
>
> 合并（Combine）：把每个已经处理好的子问题合并，得到最终的解。

在这道题里分治的思路：

![图片](https://pic.leetcode-cn.com/3aa2128a7ddcf1123454a6e5364792490c5edff62674f3cfd9c81cb7b5e8e522-file_1576478143567)

TODO 补充 js 代码

### 3. 动态规划

TODO 补充
