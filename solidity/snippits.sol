// Count by x
// Create a function with two arguments that will return an array of the first (n) multiples of (x). Return as an array
contract CountByX {

    function countBy(int x, int n) view returns (int[]) {
        int[] z;
        for (int i=1; i <= n; i ++) {
            z.push(i*x);
        }
        return z;
    }
}

// Clock
// Clock shows h hours, m minutes and s seconds after midnight.
// Write a function which returns the time since midnight in milliseconds.
pragma solidity ^0.4.19;

contract Kata {
    function past(uint h, uint m, uint s) public pure returns (uint) {
        return 1000*(h*3600+m*60+s);
    }
}