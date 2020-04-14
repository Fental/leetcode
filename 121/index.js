/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if (len <= 1) {
        return 0;
    }

    let result = {befinit: 0, min: prices[0]};

    for (let i = 1; i < len; i++) {
        result.befinit = Math.max(result.befinit, prices[i] - result.min);
        result.min = Math.min(result.min, prices[i]);
    }
    
    return result.befinit;
};