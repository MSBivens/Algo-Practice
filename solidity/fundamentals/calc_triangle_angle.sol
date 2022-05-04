// Third angle of a triangle
// Given two interior angles (in degress) of a triangle, write a function to return third
pragma solidity ^0.4.19;
contract ThirdAngle {
    function otherAngle(int angle1, int angle2) returns (int) {
        return 180-(angle1+angle2);
    }
}