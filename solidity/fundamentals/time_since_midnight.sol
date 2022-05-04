// Clock shows h hours, m minutes and s seconds after midnight.
// Write a function which returns the time since midnight in milliseconds.
pragma solidity ^0.4.19;
contract Kata {
    function past(uint h, uint m, uint s) public pure returns (uint) {
        return 1000*(h*3600+m*60+s);
    }
}