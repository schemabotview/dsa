# grams dispatched in each hour of a shift
hourly = [1200, 800, 2500, 0, 5000, 300, 900, 1500]

prefix = [0]
for g in hourly:
    prefix.append(prefix[-1] + g)    # sum of hourly[:i]
print("prefix:", prefix)


def range_total(i, j):               # hours i .. j-1, O(1)
    return prefix[j] - prefix[i]


print("hours 2-4:", range_total(2, 5), sum(hourly[2:5]))

window, total = 3, sum(hourly[:3])   # rolling 3-hour total
for end in range(3, len(hourly)):
    total += hourly[end] - hourly[end - window]
    print(f"hours {end - 2}-{end}: {total}")
