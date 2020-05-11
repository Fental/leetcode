/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let kinds = (new Set(candies)).size;
    return Math.min(candies.length / 2, kinds);
};