# 136. 只出现一次的数字

## 题目链接

https://leetcode-cn.com/problems/single-number/

## 思路

遍历数组，用 Object 记录元素是否重复

## 别的思路

> 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

官方题解给出的答案是进行位运算...

+ 对 0 和二进制位做异或操作，得到的仍然是这个二进制位
+ 对相同的二进制位做异或操作，返回的结果是 0
+ 异或操作满足交换律和结合律

> a⊕0=a
> a⊕a=0
> a⊕b⊕a=(a⊕a)⊕b=0⊕b=b

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let len = nums.length;

    let result = 0;

    for (let i = 0; i < len; i++) {
        result ^= nums[i];
    }
    
    return result;
};
```