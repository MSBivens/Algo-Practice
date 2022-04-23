# Convert number to reversed array of digits
# Given a random non-negative number, return the digits of the number within an array in reverse order
def digitize(n):
    return [int(x) for x in reversed(str(n))]

# Check if array [a] contains value [x], return boolean 
def check(seq, elem):
    return elem in seq

# Given an array of integers, return a new array with each value doubled.
# Ex [1, 2, 3] -> [2, 4, 6]
def maps(a):
    return [x * 2 for x in a]