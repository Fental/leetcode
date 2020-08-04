/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) {
        return [''];
    }

    if (n === 1) {
        return ['()'];
    }

    let prevResult = generateParenthesis(n - 1);
    let set = new Set();
    prevResult.forEach(item => {
        for (let i = 0, len = item.length; i <= len; i++) {
            set.add(`${item.substr(0, i)}()${item.substr(i, len - i)}`);
        }
    });

    return [...set.values()];
};