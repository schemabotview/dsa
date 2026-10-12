from bisect import bisect_left, bisect_right


def lower_bound(xs, target):
    """First i with xs[i] >= target (len(xs) if none)."""
    lo, hi = 0, len(xs)
    while lo < hi:                  # answer is in [lo, hi]
        mid = (lo + hi) // 2
        if xs[mid] < target:
            lo = mid + 1            # xs[:lo] all < target
        else:
            hi = mid                # xs[hi:] all >= target
    return lo


weights = [800, 800, 800, 1200, 2500, 2500, 5000]
for t in [800, 2500, 1000, 9000]:
    first = lower_bound(weights, t)
    print(t, first, bisect_left(weights, t),
          bisect_right(weights, t))
