from itertools import combinations

weights = [2500, 800, 5000, 1200, 3700, 900]   # grams
CAP = 9000


def loads():                         # every subset's total
    for k in range(len(weights) + 1):
        for c in combinations(weights, k):
            yield sum(c)


def best_load():                     # optimisation
    return max(t for t in loads() if t <= CAP)


def can_load(target):                # decision: yes or no
    return any(target <= t <= CAP for t in loads())


print("optimisation: best load =", best_load())
print("decision: load >= 8700?", can_load(8700))
print("decision: load >= 8800?", can_load(8800))
lo, hi, calls = 0, CAP, 0       # optimum from decisions
while lo < hi:
    mid, calls = (lo + hi + 1) // 2, calls + 1
    lo, hi = (mid, hi) if can_load(mid) else (lo, mid - 1)
print("binary search,", calls, "decision calls:", lo)
