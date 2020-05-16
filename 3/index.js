/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;

    if (len <= 1) {
        return len;
    }

    let max = 0;
    let set = new Set();
    let i = 0;
    let j = 0;
    for (; i < len; i++) {
        i !== 0 && set.delete(s[i - 1]);

        while (j < len && !set.has(s[j])) {
            set.add(s[j]);
            j++;
        }

        max = Math.max(max, j - i);
    }

    return max;
};