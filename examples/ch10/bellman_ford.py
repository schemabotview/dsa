from weighted import INF


def bellman_ford(vertices, edges, src):
    dist = {v: INF for v in vertices}
    dist[src] = 0
    for _ in range(len(vertices) - 1):   # V - 1 rounds
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    bad = {v for u, v, w in edges   # still improving?
           if dist[u] + w < dist[v]}
    changed = True
    while changed:                    # spread to reachable
        changed = False
        for u, v, w in edges:
            if u in bad and v not in bad:
                bad.add(v)
                changed = True
    return {v: ("-inf" if v in bad else dist[v])
            for v in vertices}


V = ["Hub", "A", "B", "C", "Port", "Annex"]
legs = [("Hub", "A", 4), ("A", "B", 3), ("B", "Port", 2),
        ("Hub", "C", 8), ("C", "B", -6)]  # credit on C->B
print(bellman_ford(V, legs, "Hub"))
loop = legs + [("B", "A", -4)]           # A->B->A: -1
print(bellman_ford(V, loop, "Hub"))
