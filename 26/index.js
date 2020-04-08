/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;

    if (len <= 1) {
        return len;
    }

    let curIdx = 0;

    for (let i = 1; i < len; i++) {
        if (nums[curIdx] !== nums[i]) {
            nums[++curIdx] = nums[i];
        }
    }

    return curIdx + 1;
};
