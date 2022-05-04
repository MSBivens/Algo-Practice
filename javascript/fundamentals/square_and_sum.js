// Squres each number passed into it and then sums the results
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}