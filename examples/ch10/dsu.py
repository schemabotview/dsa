class DSU:
    """Disjoint sets: union by size + path compression."""

    def __init__(self, items):
        self.parent = {x: x for x in items}
        self.size = {x: 1 for x in items}

    def find(self, x):
        root = x
        while self.parent[root] != root:
            root = self.parent[root]
        while self.parent[x] != root:  # compress the path
            self.parent[x], x = root, self.parent[x]
        return root

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False                  # already joined
        if self.size[ra] < self.size[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra           # small under large
        self.size[ra] += self.size[rb]
        return True
