from hashing import h


class ProbingSet:
    def __init__(self):
        self.slots, self.size, self.moves = [None] * 8, 0, 0

    def _place(self, slots, key):
        i = h(key, len(slots))
        while slots[i] is not None:
            i = (i + 1) % len(slots)
        slots[i] = key

    def add(self, key):
        if (self.size + 1) / len(self.slots) > 0.5:
            bigger = [None] * (2 * len(self.slots))
            for k in self.slots:      # rehash: new m
                if k is not None:
                    self._place(bigger, k)
                    self.moves += 1
            self.slots = bigger
        self._place(self.slots, key)
        self.size += 1
