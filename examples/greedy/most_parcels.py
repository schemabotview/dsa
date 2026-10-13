import random
from itertools import combinations


def greedy_count(weights, cap):
    """Most parcels in one van: lightest first."""
    load, taken = 0, []
    for w in sorted(weights):
        if load + w <= cap:
            load += w
            taken.append(w)
    return taken


def best_count(weights, cap):           # check every subset
    for k in range(len(weights), -1, -1):
        subsets = combinations(weights, k)
        if any(sum(c) <= cap for c in subsets):
            return k


rng = random.Random(11)
agree = 0
for trial in range(200):
    ws = [rng.randrange(100, 3000) for _ in range(8)]
    g = len(greedy_count(ws, 6000))
    agree += g == best_count(ws, 6000)
print("greedy matched brute force:", agree, "of 200")
print(greedy_count([2500, 800, 5000, 1200, 300, 900], 6000))
