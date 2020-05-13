# 1260. 二维网格迁移

## 题目链接

https://leetcode-cn.com/problems/shift-2d-grid/

## 思路

最开始的解法就是移动 k 次则循环 k 次，比较暴力，代码如下：

```
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let rowLen = grid.length;
    let columnLen = grid[0].length;
    
    let lastColumn;
    let result = [];

    grid.forEach(row => result.push([].concat(row)));

    while (k-- > 0) {
        lastColumn = result.map(row => row[columnLen - 1]);
        
        for (let i = 0; i < rowLen; i++) {
            for (let j = columnLen - 2; j >= 0; j--) {
                result[i][j + 1] = result[i][j]; 
            }
        }

        lastColumn.forEach((val, idx) => {
            result[(idx + 1) % rowLen][0] = val;
        });
    }

    return result;
};
```

看了题解之后，思路是不再循环 k 次，直接算出移动 k 次的新位置。
