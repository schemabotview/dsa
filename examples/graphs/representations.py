from depots import ROADS, adjacency

adj = adjacency(ROADS)
names = sorted(adj)
idx = {v: i for i, v in enumerate(names)}
matrix = [[0] * len(names) for _ in names]
for a, b in ROADS:
    matrix[idx[a]][idx[b]] = matrix[idx[b]][idx[a]] = 1

V, E = len(names), len(ROADS)
print(f"V={V} E={E}")
print("list cells:  ", sum(len(n) for n in adj.values()),
      "= 2E")
print("matrix cells:", V * V, "= V^2")
print("edge Hub-Port? list scans", len(adj["Hub"]),
      "| matrix:", matrix[idx["Hub"]][idx["Port"]])
print("Hub neighbours: list gives", len(adj["Hub"]),
      "| matrix scans a row of", V)
