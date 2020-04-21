/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length;
    let hash = {[nums[0]]: 1};
    let target = nums[0];

    for (let i = 1; i < len; i++) {
        hash[nums[i]] = hash[nums[i]] == null ? 1 : hash[nums[i]] + 1;
        if (hash[nums[i]] > hash[target]) {
            target = nums[i];
        } 
    }

    return target;
};