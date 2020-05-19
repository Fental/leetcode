/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;

    if (len <= 1) {
        return s;
    }

    let dp = [];
    // p(i, j) = p(i + 1, j - 1) && si === sj
    // p(i, i) = true
    // p(i, i + 1) = si === si+1
    let max = 1;
    let start = 0;

    // p(i, i) === true
    for (let k = 0; k < len; k++) {
        dp[k] = [];
        dp[k][k] = true;
    }

    // 计算 p(i, j)
    for (let j = 0; j < len; j++) {
        for (let i = j - 1; i >= 0; i--) {
            // p(i, i + 1) = si === si+1
            // p(i, j) = p(i + 1, j - 1) && si === sj
            dp[i][j] = s[i] === s[j] && (i === j - 1 ? true : dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > max) {
                max = j - i + 1;
                start = i;
            }
        }
    }

    return s.substr(start, max);
};