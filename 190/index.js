/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n >>> 0;
    let poi = 31;
    let result = 0;
    while (poi >= 0) {
        result += (n & 1) << poi;
        n = n >>> 1;
        poi--;
    }
    return result >>> 0;
};