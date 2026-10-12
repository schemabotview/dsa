from itertools import combinations

# (start, finish, value): value is the parcels in the slot
slots = [(0, 3, 2), (2, 9, 10), (4, 6, 2), (7, 8, 2)]


def earliest_finish(slots):
    chosen, free_at = [], 0
    for s, f, v in sorted(slots, key=lambda x: x[1]):
        if s >= free_at:
            chosen.append((s, f, v))
            free_at = f
    return chosen


def best_value(slots):
    best = 0
    for k in range(1, len(slots) + 1):
        for c in combinations(sorted(slots), k):
            if all(a[1] <= b[0] for a, b in zip(c, c[1:])):
                best = max(best, sum(v for *_, v in c))
    return best


g = earliest_finish(slots)
print("earliest finish:", g, "value", sum(v for *_, v in g))
print("best value:     ", best_value(slots))
