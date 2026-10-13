import math
from itertools import permutations

# depots on a grid (km); a van visits all, then returns
stops = {"Hub": (0, 0), "N": (2, 2), "E": (4, 4),
         "S": (7, 3), "W": (-4, 3), "P": (-1, 8),
         "A": (3, 6)}
others = sorted(set(stops) - {"Hub"})


def d(a, b):
    return math.dist(stops[a], stops[b])


def tour_len(t):
    return sum(d(a, b) for a, b in zip(t, t[1:] + t[:1]))


def nearest_neighbour():                # heuristic: O(n^2)
    tour, left = ["Hub"], set(others)
    while left:
        here = tour[-1]
        nxt = min(sorted(left), key=lambda s: d(here, s))
        tour.append(nxt)
        left.remove(nxt)
    return tour


tours = [["Hub", *p] for p in permutations(others)]
exact = min(tours, key=tour_len)        # 6! = 720 tours
nn = nearest_neighbour()
print(f"nearest neighbour {tour_len(nn):5.1f} km", nn)
print(f"exact (720 tours) {tour_len(exact):5.1f} km", exact)
print(f"ratio: {tour_len(nn) / tour_len(exact):.2f}")
