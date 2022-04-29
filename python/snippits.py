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

# Simple multiplication, multiply num by 8 if num == even, by 9 if == odd
def simple_multiplication(number) :
    return number * 9 if number % 2 else number * 8

# Innert Values
# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
def invert(lst):
    return [-i for i in lst]

# Convert string to a number
def string_to_number(s):
    return int(s)

# Return winner of rock, paper, scissors, or draw
def rps(p1, p2):
    beats = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'}
    if beats[p1] == p2:
        return "Player 1 won!"
    if beats[p2] == p1:
        return "Player 2 won!"
    return "Draw!"

# Convert boolean values to strings 'Yes' for true or 'No' for false.
def bool_to_word(boolean):
    return "Yes" if boolean else "No"

# Sum Arrays
# Write a function that takes an array of numbers and returns the sum of the numbers. 
# The numbers can be negative or non-integer. 
# If the array does not contain any numbers then you should return 0.
def sum_array(a):
    return sum(a)

# Transportation on vacation
# Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
# Write a code that gives out the total amount for different days(d).
def rental_car_cost(days):
    price = days*40
    if days >= 7:
        price = (days*40) - 50
    elif days >= 3:
        price = (days*40) - 20
    return price