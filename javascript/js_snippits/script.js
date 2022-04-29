// Summation
// Finds the summation of every number from 1 to num
var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

// Fake Binary
// Given string of digits, replace any digit  below 5 with '0' and any digit 5 and above with '1'. Return the resulting string
function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
        if(Number(str[i])>=5){
        newStr += "1"
        }
        else{
        newStr += "0";
        }
    }
    return newStr;
}

// Reversed Sequence
//Build a function that returns an array of integers from n to 1 where n>0
const reverseSeq = n => {
    let arr = [];
        for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    }

// Always Hungry 
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
    var hungry = 0;
    for (var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            hungry++;
        }
    }
    if (hungry == 0) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr) {
    var sum = 0;
    
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum / arr.length;
    var count = 0
    
    for (var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Array Reverse 
// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    for (var i=0; i<arr.length; i++) {
        arr.reverse();
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Reversed Strings
// Reverses the string passed into it
const solution = str => str.split('').reverse().join('');

// Fibonacci Array
// Write a function that will return an array of Fibonacci numbers up to a given length n.
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr [fibArr.length-1];
        var prevprev = fibArr [fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Convert a number to a string
function numberToString(num) {
    return num.toString();
}

// Are you playing Banjo?
// Ccreate a function which answers the question "Are you playing Banjo?"
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

// Find the smallest integer in an array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        const arr = args
        const min = Math.min(...arr)
        return min
    }
}

// Convert Boolean to a string
function booleanToString(b){
    return b.toString();
}

// DNA to RNA Conversion
// EX "GCAT"  =>  "GCAU"
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

// Function that takes speed in km/hr and returns it in cm/s rounded down to the integer
const speed = s => Math.floor(s/0.036);

// Squres each number passed into it and then sums the results
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}

// Receive an array scores, calculate average, return True if you scored better, False if not
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}  

// Sum without highest and lowest number (by value, not index)
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function(a,b) {return a - b;});
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
    }
        return total;
    }
}

