/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    let dp = [];

    if (len === 0) {
        return 0;
    }

    for (let i = 0; i < len; i++) {
        if (i === 0) {
            dp[i] = nums[i];
            continue;
        }
        dp[i] = Math.max(dp[i - 1], (dp[i - 2] || 0) + nums[i]);
    }

    return dp[len - 1];
};