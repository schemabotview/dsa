from collections import deque
from depots import ROADS, adjacency


def bfs(adj, start):
    dist, parent = {start: 0}, {start: None}
    queue = deque([start])
    while queue:
        v = queue.popleft()
        for w in adj[v]:
            if w not in dist:           # first visit: final
                dist[w] = dist[v] + 1
                parent[w] = v
                queue.append(w)
    return dist, parent


def path(parent, target):
    out = []
    while target is not None:           # walk back to start
        out.append(target)
        target = parent[target]
    return out[::-1]


dist, parent = bfs(adjacency(ROADS), "North")
print("hops:", dist)
print("North to Port:", path(parent, "Port"))
print("reaches Airfield?", "Airfield" in dist)
