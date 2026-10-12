from functools import cache
from itertools import permutations

batches = [40, 10, 30, 20]     # parcels per adjacent batch


@cache
def cost(i, j):
    """Cheapest way to merge batches i..j into one.
    Merging two neighbours costs their combined size."""
    if i == j:
        return 0
    total = sum(batches[i:j + 1])
    return total + min(cost(i, k) + cost(k + 1, j)
                       for k in range(i, j))


def brute(xs):                   # try every merge order
    if len(xs) == 1:
        return 0
    best = None
    for k in range(len(xs) - 1):
        merged = xs[:k] + [xs[k] + xs[k + 1]] + xs[k + 2:]
        c = xs[k] + xs[k + 1] + brute(merged)
        best = c if best is None else min(best, c)
    return best


n = len(batches)
print("interval DP:", cost(0, n - 1),
      " brute force:", brute(batches))
print("states:", n * (n + 1) // 2, " choices each: < n")
