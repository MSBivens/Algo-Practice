// Count by x
// Create a function with two arguments that will return an array of the first (n) multiples of (x). Return as an array
pragma solidity ^0.4.19;
contract CountByX {

    function countBy(int x, int n) view returns (int[]) {
        int[] z;
        for (int i=1; i <= n; i ++) {
            z.push(i*x);
        }
        return z;
    }
}

// Clock shows h hours, m minutes and s seconds after midnight.
// Write a function which returns the time since midnight in milliseconds.
pragma solidity ^0.4.19;
contract Kata {
    function past(uint h, uint m, uint s) public pure returns (uint) {
        return 1000*(h*3600+m*60+s);
    }
}

// String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.
pragma solidity ^0.4.19;
contract Repeater {
    function multiply(uint8 repeat, string pattern) returns (string) {
        uint patternLen = bytes(pattern).length;
        uint resultLen = patternLen * repeat;
        bytes memory result = new bytes(resultLen);
        for(uint i = 0; i < resultLen; i++) {
            result[i] = bytes(pattern)[i % patternLen];
        }
        return string(result);
    }
}

// Third angle of a triangle
// Given two interior angles (in degress) of a triangle, write a function to return third
pragma solidity ^0.4.19;
contract ThirdAngle {
    function otherAngle(int angle1, int angle2) returns (int) {
        return 180-(angle1+angle2);
    }
}

// Function tests if the factor is factor of base, return Boolean T/F
pragma solidity ^0.4.19;
contract Kata {
    function checkForFactor(int base, int factor) public pure returns (bool) {
        return base % factor == 0;
    }
}

// Takes x position of person, rolls a d6 for spaces moved, and returns new position
pragma solidity ^0.4.19;
contract Kata {
    function move(int p, int r) public pure returns (int) {
        return p + (r*2);
    }
}