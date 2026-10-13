import random

compares = 0


def select(xs, k, rng):
    """k-th smallest (0-based); expected Θ(n)."""
    global compares                 # elements scanned
    while True:
        pivot = rng.choice(xs)
        compares += len(xs)
        lower = [x for x in xs if x < pivot]
        equal = [x for x in xs if x == pivot]
        if k < len(lower):
            xs = lower
        elif k < len(lower) + len(equal):
            return pivot
        else:
            k -= len(lower) + len(equal)
            xs = [x for x in xs if x > pivot]


rng = random.Random(42)
weights = [rng.randrange(100, 9000) for _ in range(10_001)]
median = select(weights, 5000, random.Random(1))
print(median, sorted(weights)[5000])
print("elements scanned:", compares, " n:", len(weights))
