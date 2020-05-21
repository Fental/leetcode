/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length;

    let i = 0;
    let j = len - 1;
    let max = 0;

    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return max;
};