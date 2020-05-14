/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    const isPalindrome = s => {
        let len = s.length;
        let i = 0;
        let j = len - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            } else {
                i++;
                j--;
            }
        }

        return true;
    };

    let len = s.length;
    if (len <= 1) {
        return len;
    }

    return isPalindrome(s) ? 1 : 2;

};