# 15. 三数之和

## 题目链接

https://leetcode-cn.com/problems/3sum/

## 解法

首先想到的肯定是 O(n ^ 3) 的暴力法

其次是参考 two sum，想了个 O(n ^ 2) 的解法，然而超时...

```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length;

    if (len < 3) {
        return [];
    }

    const twoSum = (nums, l, r, target) => {
        let obj = {};

        for (let i = l; i <= r; i++) {
            if (obj[nums[i]] == null) {
                obj[nums[i]] = 1;
            } else {
                obj[nums[i]]++;
            }
        }

        let result = [];
        let sets = new Set();
        
        for (let i = l; i <= r; i++) {
            if (sets.has(nums[i])) {
                continue;
            }

            sets.add(nums[i]);
            obj[nums[i]]--;
            let rest = target - nums[i];
            if (obj[rest] != null && obj[rest] > 0) {
                sets.add(rest);
                result.push([nums[i], rest]);
            }
            obj[nums[i]]++;
        }
        
        return result;
    }

    let result = [];
    let sets = new Set();
    for (let i = 0; i < len - 2; i++) {
        if (sets.has(nums[i])) {
            continue;
        }

        // console.log('nums[i]', nums[i]);
        let twoSumResults = twoSum(nums, i + 1, len - 1, 0 - nums[i]);
        twoSumResults.forEach(item => {
            // console.log('item...', item, sets);
            if (!sets.has(item[0]) && !sets.has(item[1])) {
                result.push([nums[i], ...item]);
            }
        });
        sets.add(nums[i]);
    }

    return result;
};
```

## 较优的解法（也是目前我唯一过了的解法）

排序 + 双指针

遍历排序后的数组
1、`nums[i] > 0`，不需要再遍历了
2、`nums[i] === nums[i - 1]` 直接跳过，避免重复答案
3、左指针从 i + 1 开始，右指针从 len - 1 开始
    3.1、`nums[i] + nums[l] + nums[r] === 0`，找到答案，同时 l++ r-- 找新的答案（注意移动双指针需要跳过重复元素）
    3.2、`> 0` 由于数组有序，肯定是右指针大了，所以 r-- 
    3.3、`< 0` 左指针小了 l++
