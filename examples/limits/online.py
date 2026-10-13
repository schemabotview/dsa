# Van hire: rent at 1 a day, or buy for B. How many days
# are needed is revealed one day at a time.
B = 10


def online_cost(days):              # rent until B, buy
    return days if days < B else (B - 1) + B


def offline_cost(days):             # knows the future
    return min(days, B)


print("days  online  offline  ratio")
for days in [3, 9, 10, 12, 30, 100]:
    on, off = online_cost(days), offline_cost(days)
    print(f"{days:4}  {on:6}  {off:7}  {on / off:5.2f}")
print("worst ratio approaches 2 - 1/B =", 2 - 1 / B)
