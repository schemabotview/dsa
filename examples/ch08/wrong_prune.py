weights = [2500, 800, 5000, 1200, 3700, 900]
CAP = 9000


def first_fit_search(i, load):
    """WRONG prune: once a parcel fits, never try
    skipping it. Its plans are feasible, not optimal."""
    if i == len(weights):
        return load
    if load + weights[i] <= CAP:
        return first_fit_search(i + 1, load + weights[i])
    return first_fit_search(i + 1, load)


optimum = max(sum(w for k, w in enumerate(weights)
                  if mask >> k & 1)
              for mask in range(1 << len(weights))
              if sum(w for k, w in enumerate(weights)
                     if mask >> k & 1) <= CAP)
print("wrong prune:", first_fit_search(0, 0), "(feasible)")
print("optimum:    ", optimum, "(all 64 subsets)")
