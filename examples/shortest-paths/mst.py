import heapq
from dsu import DSU


def kruskal(vertices, edges):
    d, tree = DSU(vertices), []
    for a, b, w in sorted(edges, key=lambda e: e[2]):
        if d.union(a, b):               # skip cycle-makers
            tree.append((a, b, w))
    return tree


def prim(adj, start):
    seen, tree = {start}, []
    heap = [(w, start, v) for v, w in adj[start]]
    heapq.heapify(heap)
    while heap:
        w, a, b = heapq.heappop(heap)  # lightest crossing
        if b in seen:
            continue
        seen.add(b)
        tree.append((a, b, w))
        for c, wc in adj[b]:
            if c not in seen:
                heapq.heappush(heap, (wc, b, c))
    return tree
