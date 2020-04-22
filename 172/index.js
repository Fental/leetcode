/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result = 0;
    let tmp = n;

    while ((tmp = Math.floor(tmp / 5)) !== 0) {
        result += tmp;
    }

    return result;
};