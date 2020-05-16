# 3. 无重复字符的最长子串

## 题目链接

https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

## 思路

没有很好的想法，为了解出，直接暴力

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;

    if (len <= 1) {
        return len;
    }

    let max = 0;
    for (let i = 0; i < len; i++) {
        let set = new Set();
        let j = i;
        for (; j < len; j++) {
            if (set.has(s[j])) {
                break;
            } else {
                set.add(s[j]);
            }
        }
        max = Math.max(max, j - i);
    }

    return max;
};
```

## 较优解法

看了题解，学到了滑动窗口，代码逻辑见 index.js
