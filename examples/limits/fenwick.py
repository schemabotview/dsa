class Fenwick:
    """Prefix sums with point updates, both O(log n)."""

    def __init__(self, n):
        self.t = [0] * (n + 1)

    def add(self, i, delta):              # 1-based index
        while i < len(self.t):
            self.t[i] += delta
            i += i & -i                   # next responsible

    def prefix(self, i):                  # sum of [1..i]
        s = 0
        while i > 0:
            s += self.t[i]
            i -= i & -i                   # strip lowest bit
        return s
