import heapq
from itertools import count
from planner import Parcel

a = Parcel("P-104", "North", 2500)
b = Parcel("P-221", "East", 800)

urgent = []
heapq.heappush(urgent, (1, a))
try:
    heapq.heappush(urgent, (1, b))   # tie: compares parcels
except TypeError as e:
    print("TypeError:", e)

urgent, seq = [], count()            # (priority, seq, item)
for prio, p in [(2, a), (1, b), (1, a)]:
    heapq.heappush(urgent, (prio, next(seq), p))
while urgent:
    prio, _, p = heapq.heappop(urgent)
    print(prio, p.pid)        # ties: first in, first out
