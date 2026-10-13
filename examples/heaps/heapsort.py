def sift_down(a, i, end):
    while (c := 2 * i + 1) < end:
        if c + 1 < end and a[c + 1][0] > a[c][0]:
            c += 1                  # larger child
        if a[i][0] >= a[c][0]:
            return
        a[i], a[c] = a[c], a[i]
        i = c


def heapsort(a):                    # in place, key a[k][0]
    for i in range(len(a) // 2 - 1, -1, -1):
        sift_down(a, i, len(a))     # build a max-heap
    for end in range(len(a) - 1, 0, -1):
        a[0], a[end] = a[end], a[0] # max to final place
        sift_down(a, 0, end)


pairs = [(800, "P-221"), (800, "P-512"), (2500, "P-104"),
         (800, "P-600"), (1200, "P-458")]
heapsort(pairs)
print([pid for _, pid in pairs])    # 800s reordered
print([w for w, _ in pairs])
