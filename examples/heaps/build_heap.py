swaps = 0


def sift_down(a, i):
    global swaps
    while True:
        kids = [j for j in (2*i + 1, 2*i + 2) if j < len(a)]
        c = min(kids, key=a.__getitem__, default=None)
        if c is None or a[i] <= a[c]:
            return
        a[i], a[c] = a[c], a[i]
        swaps, i = swaps + 1, c


def sift_up(a, i):
    global swaps
    while i > 0 and a[(i - 1) // 2] > a[i]:
        p = (i - 1) // 2
        a[p], a[i] = a[i], a[p]
        swaps, i = swaps + 1, p


n = 1023
a = list(range(n, 0, -1))              # worst: descending
for i in range(n // 2 - 1, -1, -1):    # bottom-up build
    sift_down(a, i)
print("bottom-up build: ", swaps, "swaps")

swaps, b = 0, []
for x in range(n, 0, -1):              # n separate pushes
    b.append(x)
    sift_up(b, len(b) - 1)
print("repeated pushes:", swaps, "swaps")
