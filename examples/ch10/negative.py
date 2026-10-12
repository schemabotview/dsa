import heapq

# A -> C costs 2 directly; via B it costs 5 + (-4) = 1
adj = {"A": [("B", 5), ("C", 2)], "B": [("C", -4)], "C": []}

dist, done, heap = {"A": 0}, set(), [(0, "A")]
while heap:
    d, u = heapq.heappop(heap)
    if u in done:
        continue
    done.add(u)                  # assumes d can't improve
    for v, w in adj[u]:
        if v not in done and d + w < dist.get(v, 1e9):
            dist[v] = d + w
            heapq.heappush(heap, (dist[v], v))
print("Dijkstra says A->C:", dist["C"])
print("true best A->C:   ", min(2, 5 + -4))
