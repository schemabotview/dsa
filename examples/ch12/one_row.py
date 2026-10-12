from knapsack import ITEMS, CAP


def one_row(items, cap, forward):
    K = [0] * (cap + 1)                   # a single row
    for w, v in items:
        cs = range(w, cap + 1) if forward else \
            range(cap, w - 1, -1)
        for c in cs:
            K[c] = max(K[c], K[c - w] + v)
    return K[cap]


print("backward (0/1):     ", one_row(ITEMS, CAP, False))
print("forward  (reuses!): ", one_row(ITEMS, CAP, True))
w, v = ITEMS[3]
print(f"forward = 3 copies of ({w} kg, {v}):", 3 * v)
