class MinHeap:
    def __init__(self):
        self.a, self.swaps = [], 0

    def push(self, x):
        a = self.a
        a.append(x)
        i = len(a) - 1
        while i > 0 and a[(i - 1) // 2] > a[i]:  # sift up
            p = (i - 1) // 2
            a[p], a[i] = a[i], a[p]
            self.swaps += 1
            i = p

    def pop(self):
        a = self.a
        top, last = a[0], a.pop()
        if a:
            a[0], i = last, 0
            while True:                         # sift down
                kids = [j for j in (2*i + 1, 2*i + 2)
                        if j < len(a)]
                c = min(kids, key=a.__getitem__,
                        default=None)
                if c is None or a[i] <= a[c]:
                    break
                a[i], a[c] = a[c], a[i]
                self.swaps += 1
                i = c
        return top
