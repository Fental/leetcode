# 169. 多数元素

## 题目链接

https://leetcode-cn.com/problems/majority-element/

## 思路

我的解法是用 hash 表计数

## 别的解法

### 一、排序

### 二、分治法

如果数 `a` 是数组 `nums` 的众数，如果我们将 `nums` 分为两部分，那么 `a` 必定是至少一部分的众数。

反证法证明：假设 `a` 既不是左半部分的众数，也不是右半部分的众数，那么 `a` 出现的次数少于 `l / 2 + r / 2` 次，由于 `l / 2 + r / 2 <= (l + r) / 2`，`a` 不是 `nums` 众数，矛盾

### 三、Boyer-Moore 投票算法

> 投票算法证明：
> 如果候选人不是maj 则 maj,会和其他非候选人一起反对 会反对候选人,所以候选人一定会下台(maj==0时发生换届选举)
> 如果候选人是maj , 则maj 会支持自己，其他候选人会反对，同样因为maj 票数超过一半，所以maj 一定会成功当选

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length;
    let cnt = 1;
    let value = nums[0];

    for (let i = 1; i < len; i++) {
        if (nums[i] !== value) {
            cnt--;
        } else {
            cnt++;
        }
        if (cnt === 0) {
            value = nums[i];
            cnt = 1;
        }
    }

    return value;
};
```
