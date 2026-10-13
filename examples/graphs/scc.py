def kosaraju(adj):
    order, seen = [], set()

    def finish(v):              # pass 1: finish order
        seen.add(v)
        for w in adj[v]:
            if w not in seen:
                finish(w)
        order.append(v)

    for v in adj:
        if v not in seen:
            finish(v)
    rev = {v: [] for v in adj}      # reverse every edge
    for v in adj:
        for w in adj[v]:
            rev[w].append(v)
    comp = {}

    def collect(v, root):       # pass 2: reversed graph
        comp[v] = root
        for w in rev[v]:
            if w not in comp:
                collect(w, root)

    for v in reversed(order):       # latest finish first
        if v not in comp:
            collect(v, v)
    return comp
