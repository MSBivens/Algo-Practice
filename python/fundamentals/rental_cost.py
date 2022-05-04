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