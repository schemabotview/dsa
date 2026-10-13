from itertools import combinations

# delivery slots at one loading dock: (start, finish)
slots = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 9), (5, 9),
         (6, 10), (8, 11), (8, 12), (2, 14), (12, 16)]


def greedy(slots, key):
    chosen, free_at = [], 0
    for s, f in sorted(slots, key=key):
        if s >= free_at:                 # compatible
            chosen.append((s, f))
            free_at = f
    return chosen


def best(slots):
    for k in range(len(slots), 0, -1):
        for c in combinations(sorted(slots), k):
            if all(a[1] <= b[0] for a, b in zip(c, c[1:])):
                return k


rules = {"earliest finish": lambda x: x[1],
         "earliest start": lambda x: x[0],
         "shortest": lambda x: x[1] - x[0]}
small = [(0, 5), (4, 7), (6, 11)]     # shortest blocks two
for name, key in rules.items():
    print(f"{name:15}", len(greedy(slots, key)),
          len(greedy(small, key)))
print("optimum        ", best(slots), best(small))
print(greedy(slots, rules["earliest finish"]))
