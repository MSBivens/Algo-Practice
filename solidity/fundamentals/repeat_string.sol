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