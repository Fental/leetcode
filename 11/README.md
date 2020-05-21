# 11. 盛最多水的容器

## 题目链接

https://leetcode-cn.com/problems/container-with-most-water/

## 思路

没有很好的想法，为了解出，直接暴力

```
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length;

    let max = 0;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        }
    }

    return max;
};
```

## 较优解法

解题的时候其实想过双指针，但是不知道应该怎么样去移动，看了题解的证明之后了解么每次应该舍弃最短边，解法见 index.js
