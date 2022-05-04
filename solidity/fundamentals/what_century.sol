// Given a year, return the century it is in.
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
pragma solidity ^0.4.19;
contract Kata {
    function century(int year) public pure returns (int) {
        return (year + 99) / 100 | 0;
    }
}