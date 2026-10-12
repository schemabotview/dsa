# Driving minutes between depots (undirected).
ROADS = [("North", "Hub", 12), ("North", "East", 4),
         ("East", "Hub", 9), ("Hub", "West", 7),
         ("West", "South", 6), ("South", "Port", 10),
         ("East", "Port", 30), ("Hub", "South", 15)]
INF = float("inf")


def adjacency(edges, directed=False):
    adj = {}
    for a, b, w in edges:
        adj.setdefault(a, []).append((b, w))
        adj.setdefault(b, [])
        if not directed:
            adj[b].append((a, w))
    return adj


def path(pred, v):
    out = []
    while v is not None:
        out.append(v)
        v = pred[v]
    return out[::-1]
