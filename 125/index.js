/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const len = s.length;

    if (len <= 1) {
        return true;
    }

    let i = 0;
    let j = len - 1;
    const isNumber = code => (code >= 48 && code <= 57);
    const isValid = code => isNumber(code) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

    while (i <= j) {
        const codeI = s.charCodeAt(i);
        const codeJ = s.charCodeAt(j);

        if (!isValid(codeI)) {
            i++;
            continue;
        }

        if (!isValid(codeJ)) {
            j--;
            continue;
        }

        if (codeI !== codeJ) {
            if (isNumber(codeI) || isNumber(codeJ)) {
                return false;
            }

            if (Math.abs(codeJ - codeI) !== 32) {
                return false;
            }
        }

        i++;
        j--;
    }

    return true;
};