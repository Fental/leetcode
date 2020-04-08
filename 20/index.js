/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length;

    // '' => true ...........
    if (len === 0) {
        return true;
    }

    if (len % 2 !== 0) {
        return false;
    }

    let pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    let arr = [];

    for (let i = 0; i < len; i++) {
        if (pairs[s[i]] == null) {
            arr.push(s[i]);
            continue;
        }
        if (arr.pop() !== pairs[s[i]]) {
            return false;
        }
    }

    return arr.pop() == null;
};
