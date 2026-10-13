compares = 0


def partition(xs, lo, hi, rng):
    global compares
    if rng:                              # random pivot
        k = rng.randrange(lo, hi + 1)
        xs[k], xs[hi] = xs[hi], xs[k]
    pivot, i = xs[hi], lo
    for j in range(lo, hi):    # xs[lo:i] <= pivot < xs[i:j]
        compares += 1
        if xs[j] <= pivot:
            xs[i], xs[j] = xs[j], xs[i]
            i += 1
    xs[i], xs[hi] = xs[hi], xs[i]    # pivot's final place
    return i


def quicksort(xs, lo, hi, rng=None):
    while lo < hi:             # recurse on smaller side
        p = partition(xs, lo, hi, rng)
        if p - lo < hi - p:
            quicksort(xs, lo, p - 1, rng); lo = p + 1
        else:
            quicksort(xs, p + 1, hi, rng); hi = p - 1
