/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let sortG = [].concat(g).sort((x, y) => x - y);
    let sortS = [].concat(s).sort((x, y) => x - y);

    let i = 0;
    let j = 0;
    let cnt = 0;
    let gLen = sortG.length;
    let sLen = sortS.length;

    while (i < gLen && j < sLen) {
        if (sortG[i] > sortS[j]) {
            j++;
        } else {
            cnt++;
            i++;
            j++;
        }
    }

    return cnt;
};