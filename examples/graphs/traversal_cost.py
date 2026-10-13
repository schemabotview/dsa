import random

V = 1000
rng = random.Random(9)
edges = {(rng.randrange(V), rng.randrange(V))
         for _ in range(3000)}
adj = {v: [] for v in range(V)}
matrix = [[0] * V for _ in range(V)]
for a, b in edges:
    adj[a].append(b)
    matrix[a][b] = 1


def visits_list():
    return sum(1 + len(adj[v]) for v in range(V))  # V+E


def visits_matrix():
    return sum(1 + V for v in range(V))        # V+V^2


print(f"V={V} E={len(edges)}")
print("adjacency list steps:  ", visits_list())
print("adjacency matrix steps:", visits_matrix())
print("memory cells: list", V + len(edges),
      " matrix", V * V)
