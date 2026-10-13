from collections import deque
from depots import TASKS, adjacency


def topo_order(adj):
    """Kahn: repeatedly take a task with no pending
    prerequisites. Fails if some tasks never free up."""
    indeg = {v: 0 for v in adj}
    for v in adj:
        for w in adj[v]:
            indeg[w] += 1
    ready = deque(v for v in adj if indeg[v] == 0)
    order = []
    while ready:
        v = ready.popleft()
        order.append(v)
        for w in adj[v]:
            indeg[w] -= 1
            if indeg[w] == 0:
                ready.append(w)
    if len(order) < len(adj):
        return None, [v for v in adj if indeg[v] > 0]
    return order, []


print(topo_order(adjacency(TASKS, directed=True)))
bad = TASKS + [("dispatch", "scan")]    # creates a cycle
print(topo_order(adjacency(bad, directed=True)))
