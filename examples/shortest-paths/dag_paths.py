from weighted import INF

# one-way legs of a delivery run: no cycles
legs = {"Depot": [("A", 5), ("B", 3)], "A": [("C", 6)],
        "B": [("A", 1), ("C", 9)], "C": [("Drop", 2)],
        "Drop": []}
order = ["Depot", "B", "A", "C", "Drop"]   # topological

dist = {v: INF for v in legs}
pred = {v: None for v in legs}
dist["Depot"] = 0
for u in order:                 # each vertex once, in order
    for v, w in legs[u]:
        if dist[u] + w < dist[v]:
            dist[v], pred[v] = dist[u] + w, u
print(dist)
print("Drop <-", pred["Drop"], "<-", pred["C"], "<-",
      pred["A"], "<-", pred["B"])
