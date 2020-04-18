/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let len = nums.length;

    let hash = {};

    for (let i = 0; i < len; i++) {
        if (hash[nums[i]] == null) {
            hash[nums[i]] = 1;
        } else {
            delete hash[nums[i]];
        }
    }
    
    return Object.keys(hash)[0];
};