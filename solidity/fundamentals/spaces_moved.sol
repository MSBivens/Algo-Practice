// Takes x position of person, rolls a d6 for spaces moved, and returns new position
pragma solidity ^0.4.19;
contract Kata {
    function move(int p, int r) public pure returns (int) {
        return p + (r*2);
    }
}