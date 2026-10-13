from depots import TASKS, adjacency

clock, disc, fin = 0, {}, {}


def dfs(adj, v):
    global clock
    clock += 1
    disc[v] = clock                 # discovered: on path
    for w in adj[v]:
        if w not in disc:
            dfs(adj, w)
    clock += 1
    fin[v] = clock                  # finished: done


adj = adjacency(TASKS, directed=True)
for v in adj:                           # every start
    if v not in disc:
        dfs(adj, v)
for v in sorted(adj, key=disc.get):
    print(f"{v:9} discovered {disc[v]:2}"
          f"  finished {fin[v]:2}")
