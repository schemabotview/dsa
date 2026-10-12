from mst import kruskal, prim
from dijkstra import dijkstra
from weighted import ROADS, adjacency

adj = adjacency(ROADS)
k = kruskal(list(adj), ROADS)
p = prim(adj, "North")
print("Kruskal:", [f"{a}-{b}" for a, b, _ in k])
print("MST total:", sum(w for *_, w in k),
      " Prim agrees:", sum(w for *_, w in p))

dist, pred, _ = dijkstra(adj, "North", log=lambda s: None)
w = {(a, b): m for a, b, m in ROADS}
w |= {(b, a): m for (a, b), m in w.items()}
spt = sum(w[pred[v], v] for v in adj if pred[v])
print("shortest-path tree from North, total:", spt)

roads = ROADS + [("Airfield", "Annex", 3)]   # 2 components
forest = kruskal(list(adjacency(roads)), roads)
print("forest edges:", len(forest), "for",
      len(adjacency(roads)), "vertices")
