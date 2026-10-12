from hashing import h


class ChainedTable:
    def __init__(self, m):
        self.buckets = [[] for _ in range(m)]

    def put(self, key, value):
        chain = self.buckets[h(key, len(self.buckets))]
        for pair in chain:
            if pair[0] == key:
                pair[1] = value         # overwrite
                return
        chain.append([key, value])

    def get(self, key):
        chain = self.buckets[h(key, len(self.buckets))]
        for k, v in chain:              # equality decides
            if k == key:
                return v
        return None
