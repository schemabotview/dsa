weights = [2500, 800, 5000, 1200, 3700, 900]
CAP = 9000
nodes = 0


def best_load(i, load, prune=True):
    """Heaviest total <= CAP using parcels i.. onward."""
    global nodes, best
    nodes += 1
    best = max(best, load)              # incumbent
    if i == len(weights):
        return
    rest = sum(weights[i:])
    if prune and load + rest <= best:   # bound: can't win
        return
    if load + weights[i] <= CAP:        # feasibility
        best_load(i + 1, load + weights[i], prune)
    best_load(i + 1, load, prune)       # skip parcel i


for prune in [False, True]:
    nodes, best = 0, 0
    best_load(0, 0, prune)
    print(f"prune={prune!s:5}  best {best}  nodes {nodes}")
