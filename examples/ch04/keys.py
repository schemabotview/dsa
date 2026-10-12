from planner import Parcel

parcels = [Parcel(*row) for row in [
    ("P-104", "North", 2500), ("P-221", "East", 800),
    ("P-317", "North", 5000), ("P-458", "West", 1200),
    ("P-512", "East", 800), ("P-600", "North", 800),
]]


def pids(ps):
    return " ".join(p.pid for p in ps)


by_weight = sorted(parcels, key=lambda p: p.weight)
print(pids(by_weight))            # ties keep input order

by_depot = sorted(by_weight, key=lambda p: p.depot)
print(pids(by_depot))             # depot, then weight

both = sorted(parcels, key=lambda p: (p.depot, p.weight))
print(by_depot == both)
