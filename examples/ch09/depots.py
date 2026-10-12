# Road links between depots: undirected, unweighted.
ROADS = [("Hub", "North"), ("Hub", "East"), ("Hub", "West"),
         ("North", "East"), ("West", "South"),
         ("South", "Port"), ("Airfield", "Annex")]

# Task dependencies: (a, b) means a must happen before b.
TASKS = [("weigh", "label"), ("scan", "sort"),
         ("sort", "load"), ("label", "load"),
         ("load", "dispatch"), ("inspect", "dispatch")]


def adjacency(edges, directed=False):
    adj = {}
    for a, b in edges:
        adj.setdefault(a, []).append(b)
        adj.setdefault(b, [])
        if not directed:
            adj[b].append(a)
    return adj
