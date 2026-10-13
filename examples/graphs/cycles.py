def has_cycle(adj):                # directed graph
    state = {}                     # 1: on path, 2: finished

    def visit(v):
        state[v] = 1
        for w in adj[v]:
            if state.get(w) == 1:   # back to active path
                return True
            if w not in state and visit(w):
                return True
        state[v] = 2
        return False
    return any(visit(v) for v in adj if v not in state)


def has_cycle_naive(adj):          # WRONG: one flag
    seen = set()

    def visit(v):
        seen.add(v)
        return any(w in seen or visit(w) for w in adj[v])
    return any(visit(v) for v in adj if v not in seen)


diamond = {"a": ["b", "c"], "b": ["d"], "c": ["d"], "d": []}
loop = {"a": ["b"], "b": ["c"], "c": ["a"]}
for name, g in [("diamond", diamond), ("loop", loop)]:
    print(f"{name:7}  path state: {has_cycle(g)!s:5}"
          f"  visited flag: {has_cycle_naive(g)}")
