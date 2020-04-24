/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let s2 = Number(n).toString(2);
    let len = s2.length;
    let result = 0;

    for (let i = 0; i < len; i++) {
        if (s2[i] === '1') {
            result++;
        }
    }

    return result;
};