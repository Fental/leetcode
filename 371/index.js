/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let carry = b;
    let sum = a;
    let tmp;

    while (carry !== 0) {
        tmp = sum;
        sum = tmp ^ carry;
        carry = (tmp & carry) << 1;
    }

    return sum;
};