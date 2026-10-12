class DynamicArray:
    """Teaching model: a fixed-size store that doubles."""

    def __init__(self):
        self.store, self.size, self.copies = [None], 0, 0

    def append(self, x):
        if self.size == len(self.store):           # full
            bigger = [None] * (2 * len(self.store))
            for k in range(self.size):
                bigger[k] = self.store[k]
            self.copies += self.size
            self.store = bigger
        self.store[self.size] = x
        self.size += 1


print("      n  capacity   copies  per append")
for n in [5, 9, 100, 1000, 1_000_000]:
    a = DynamicArray()
    for k in range(n):
        a.append(k)
    print(f"{n:7}  {len(a.store):8}  {a.copies:7}"
          f"  {a.copies / n:10.2f}")
