from collections import deque
from depots import ROADS, adjacency


def components(adj):
    seen, groups = set(), []
    for s in adj:                   # restart per component
        if s in seen:
            continue
        group, queue = [s], deque([s])
        seen.add(s)
        while queue:
            for w in adj[queue.popleft()]:
                if w not in seen:
                    seen.add(w)
                    group.append(w)
                    queue.append(w)
        groups.append(group)
    return groups


for g in components(adjacency(ROADS)):
    print(g)
