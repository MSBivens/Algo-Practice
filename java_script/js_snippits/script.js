// Summation
// Finds the summation of every number from 1 to num
var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}