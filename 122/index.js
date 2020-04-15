/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;

    if (len <= 1) {
        return 0;
    }

    let befinit = 0;
    let min = prices[0];

    for (let i = 1; i < len; i++) {
        // 跌了
        // 马上卖
        if (prices[i] < prices[i - 1]) {
            befinit = befinit + Math.max(0, prices[i - 1] - min);
            min = prices[i];
        } else if (i === len - 1) {
            // 没得观望了，看看能不能卖了赚钱
            befinit = befinit + Math.max(0, prices[i] - min);
            break;
        }
    }

    return befinit;
};