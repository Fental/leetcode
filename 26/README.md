# 26. 删除排序数组中的重复项

## 题目链接

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

## 思路

快慢指针，直接看代码即可

## 较优解

可以发现数值不一样时可以先执行慢指针++，再赋值

第一版提交代码

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;

    if (len <= 1) {
        return len;
    }

    let curVal = nums[0];
    let curIdx = 0;

    for (let i = 1; i < len; i++) {
        if (nums[i] === curVal) {
            continue;
        }

        if (i - curIdx > 1) {
            nums[curIdx + 1] = nums[i];
        }
        curVal = nums[i];
        curIdx++;
    }

    return curIdx + 1;
};
```
