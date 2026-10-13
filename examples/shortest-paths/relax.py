from weighted import INF

dist = {"North": 0, "Hub": INF, "East": INF,
        "Airfield": INF}
pred = {v: None for v in dist}


def relax(u, v, w):
    """Can the route via u improve the best known to v?"""
    if dist[u] + w < dist[v]:
        dist[v], pred[v] = dist[u] + w, u
        return True
    return False


print(relax("North", "Hub", 12), dist["Hub"])   # inf -> 12
print(relax("North", "East", 4), dist["East"])
print(relax("East", "Hub", 9), dist["Hub"])     # 13 > 12
print(relax("Hub", "East", 9), dist["East"])    # 21 > 4
print("Airfield:", dist["Airfield"], pred["Airfield"])
