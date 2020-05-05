/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hash = {};
    let result = [];

    nums1.forEach(num => hash[num] = true);
    nums2.forEach(num => {
        if (hash[num] === true) {
            result.push(num);
            delete hash[num];
        }
    });

    return result;
};