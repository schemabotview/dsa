def explore(parcels, chosen, depth=0):
    """Level k decides parcel k: van A or van B."""
    pad = "  " * depth
    if depth == len(parcels):        # leaf: a full plan
        print(pad + " ".join(chosen))
        return 1
    leaves = 0
    for van in "AB":                 # generate candidates
        chosen.append(f"{parcels[depth]}{van}")
        leaves += explore(parcels, chosen, depth + 1)
        chosen.pop()
    return leaves


print("leaves:", explore(["1", "2", "3"], []))
