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