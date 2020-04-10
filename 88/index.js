/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let len = m + n;

    for (let k = len - 1; k >= 0; k--) {
        if (j < 0 || nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else if (i < 0 || nums1[i] <= nums2[j]) {
            nums1[k] = nums2[j];
            j--;
        }
    }
};
