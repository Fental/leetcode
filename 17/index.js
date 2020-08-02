let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let len = digits.length;
    if (len === 0) {
        return [];
    }

    if (len === 1) {
        return [].concat(map[digits]);
    }

    let lastDigits = digits.substr(0, len - 1);
    let curDigit = digits[len - 1];
    let result = [];

    letterCombinations(lastDigits).forEach(item => {
        map[curDigit].forEach(c => {
            result.push(`${item}${c}`);
        });
    });

    return result;
};