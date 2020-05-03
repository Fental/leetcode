/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeorsQueue = [];
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            zeorsQueue.push(i);
            continue;
        }

        let idx = zeorsQueue.shift();
        if (idx != null) {
            nums[idx] = nums[i];
            nums[i] = 0;
            zeorsQueue.push(i);
        }
    }

};