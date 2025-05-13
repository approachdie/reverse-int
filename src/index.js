module.exports = function reverse(n) {
    let number = n.toString();
    let result = "";
    if (n > 0) {
        for (let i = number.length - 1; i >= 0; i--) {
            result += number[i];
        }
    } else {
        for (let i = number.length - 1; i > 0; i--) {
            result += number[i];
        }
    }
    return parseInt(result);
};
