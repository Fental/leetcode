# 5. 最长回文子串

## 题目链接

https://leetcode-cn.com/problems/longest-palindromic-substring/

## 思路

没有很好的想法，为了解出，直接暴力。。。结果超时间了 hhhh

```
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;

    if (len <= 1) {
        return s;
    }

    const isPalindrome = s => {
        let len = s.length;

        if (len <= 1) {
            return true;
        }

        let i = 0;
        let j = len - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    };

    let max = 0;
    let result = '';

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let tmp = s.substring(i, j + 1);
            if (isPalindrome(tmp) && tmp.length > max) {
                max = tmp.length;
                result = tmp;
            }
        }
    }

    return result;
};
```

## 较优解法

动态规划

```
// p(i, j) = p(i + 1, j - 1) && si === sj
// p(i, i) = true
// p(i, i + 1) = si === si+1
```

解法见 index.js
