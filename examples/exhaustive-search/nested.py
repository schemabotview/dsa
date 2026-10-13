def total_weight(route, weights, depth=0):
    """Contract: route is a pid or a list of routes.
    Returns the summed weight. Each call is on a
    strictly smaller piece, so recursion ends."""
    pad = "  " * depth
    if isinstance(route, str):       # base case: a parcel
        print(f"{pad}{route}: {weights[route]}")
        return weights[route]
    print(f"{pad}list of {len(route)}")
    return sum(total_weight(r, weights, depth + 1)
               for r in route)


weights = {"P-104": 2500, "P-221": 800,
           "P-317": 5000, "P-458": 1200}
route = ["P-104", ["P-221", ["P-317"]], "P-458"]
print("total:", total_weight(route, weights))
print("empty:", total_weight([], weights))
