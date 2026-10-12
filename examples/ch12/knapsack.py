# parcels: (weight in kg, value); one van, capacity 10 kg
ITEMS = [(5, 10), (4, 40), (6, 30), (3, 50)]
CAP = 10


def knapsack(items, cap):
    # K[i][c]: best value from the first i items, capacity c
    K = [[0] * (cap + 1) for _ in range(len(items) + 1)]
    for i, (w, v) in enumerate(items, 1):
        for c in range(cap + 1):
            K[i][c] = K[i - 1][c]                    # skip
            if w <= c:
                K[i][c] = max(K[i][c],
                              K[i - 1][c - w] + v)  # take
    return K


def subset_sum(weights, target):
    reach = {0}                     # sums reachable so far
    for w in weights:
        reach |= {r + w for r in reach if r + w <= target}
    return target in reach
