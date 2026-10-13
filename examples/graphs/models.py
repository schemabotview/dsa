from depots import ROADS, adjacency

roads = adjacency(ROADS)                    # undirected
print("Hub neighbours:", roads["Hub"])
print("North -> Hub too:", "Hub" in roads["North"])

one_way = adjacency([("Hub", "Port")], directed=True)
print("one-way:", one_way)

minutes = {"Hub": {"North": 12, "East": 9}}  # weighted
print("Hub to East:", minutes["Hub"]["East"], "min")

lanes = {("Hub", "North"): ["A-road", "toll road"]}
print("parallel edges:", lanes)             # multigraph
print("V =", len(roads), " E =", len(ROADS))
