def insertion_sort(xs):
    xs, shifts = list(xs), 0
    for i in range(1, len(xs)):
        x, j = xs[i], i
        while j > 0 and xs[j - 1] > x:
            xs[j] = xs[j - 1]          # shift right
            j, shifts = j - 1, shifts + 1
        xs[j] = x
    return xs, shifts


def selection_sort(xs, key=lambda x: x):
    xs, compares = list(xs), 0
    for i in range(len(xs)):
        m = i
        for j in range(i + 1, len(xs)):
            compares += 1
            if key(xs[j]) < key(xs[m]):
                m = j
        xs[i], xs[m] = xs[m], xs[i]    # long swap
    return xs, compares


n = 100
for name, data in [("sorted", list(range(n))),
                   ("reversed", list(range(n, 0, -1)))]:
    shifts = insertion_sort(data)[1]
    compares = selection_sort(data)[1]
    print(f"{name:8} shifts {shifts:4} compares {compares}")

pairs = [(2, "a"), (2, "b"), (1, "c")]  # key: number
print(selection_sort(pairs, key=lambda p: p[0])[0])
