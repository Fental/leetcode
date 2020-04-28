/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        if (hash[nums[i]] == null) {
            hash[nums[i]] = i;
            continue;
        }
        
        if (i - hash[nums[i]] <= k) {
            return true;
        }

        hash[nums[i]] = i;
    }

    return false;
};