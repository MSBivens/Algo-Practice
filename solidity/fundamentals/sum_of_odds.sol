// Sum of odd numbers
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
pragma solidity ^0.4.19;
contract Kata {
    function rowSumOddNumbers(uint n) public returns (uint) {
        return n ** 3;
    }
}