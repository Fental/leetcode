/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let rowLen = grid.length;
    let columnLen = grid[0].length;
    let cnts = rowLen * columnLen;

    let result = [];

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < columnLen; j++) {
            // 直接算出移动 k 次后的新位置
            let newPos = (i * columnLen + j + k) % cnts;
            let newi = Math.floor(newPos / columnLen);
            let newj = newPos % columnLen;
            
            if (result[newi] == null) {
                result[newi] = [];
            }

            result[newi][newj] = grid[i][j];
        }
    }

    return result;
};