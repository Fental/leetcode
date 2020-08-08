# 31. 下一个排列

## 题目链接

https://leetcode-cn.com/problems/next-permutation/

## 思路

1 5 8 4 7 6 5 3 1

=> 1 5 8 [5] 7 6 [4] 3 1

=> 1 5 8 [5] 1 3 4 5 7

查找 + 交换 + 排序

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    if (len < 2) {
        return;
    }

    const swap = (arr, i, j) => {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    };

    const bubbleSort = (arr, start) => {
        let len = arr.length;
        if (start === len - 1) {
            return;
        }

        let i = start;
        while (i < len - 1) {
            for (let j = len - 1; j > i; j--) {
                if (arr[j] < arr[j - 1]) {
                    swap(arr, j, j - 1);
                }
            }
            i++;
        }
    };

    if (len === 2) {
        swap(nums, 0, 1);
        return 
    }

    let i = len - 1;

    while (i >= 0) {
        let min = Infinity;
        let minIdx = -1;
        let j = i + 1;
        // 查找
        for (; j < len; j++) {
            if (nums[j] < min && nums[j] > nums[i]) {
                minIdx = j;
                min = nums[j];
            }
        }

        if (nums[i] < min && minIdx !== -1) {
            // 交换
            swap(nums, i, minIdx);
            // 排序
            bubbleSort(nums, i + 1);
            return;
        }
        i--;
    }

    bubbleSort(nums, 0);
};
```

## 较优解法

查找 + 交换 + 反转，[TODO](https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-by-leetcode/)
