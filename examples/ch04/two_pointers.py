def pair_for(weights, capacity):
    """Two weights summing to capacity, if sorted."""
    lo, hi = 0, len(weights) - 1
    while lo < hi:
        s = weights[lo] + weights[hi]
        if s == capacity:
            return weights[lo], weights[hi]
        if s < capacity:
            lo += 1             # too small: raise low
        else:
            hi -= 1             # too big: lower high
    return None


ws = [300, 800, 900, 1200, 1500, 2500, 5000]
print(pair_for(ws, 3400))               # sorted: found
print(pair_for([900, 5000, 300, 2500, 1200], 3400))
