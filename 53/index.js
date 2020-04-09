/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    let sum = nums[0];

    if (len === 1) {
        return sum;
    }

    let maxSum = sum;
    for (let i = 1; i < len; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};
