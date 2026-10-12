from fenwick import Fenwick

hourly = [1200, 800, 2500, 0, 5000, 300, 900, 1500]

prefix = [0]                         # static: Chapter 3
for g in hourly:
    prefix.append(prefix[-1] + g)
print("static hours 3-5:", prefix[5] - prefix[2])

fw = Fenwick(len(hourly))                  # dynamic
for i, g in enumerate(hourly, 1):
    fw.add(i, g)
print("fenwick hours 3-5:", fw.prefix(5) - fw.prefix(2))
fw.add(4, 700)                       # a late correction
print("after +700 in hour 4:", fw.prefix(5) - fw.prefix(2))
print("static list now stale:", prefix[5] - prefix[2])
