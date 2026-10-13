import copy
from planner import Parcel

today = [Parcel("P-104", "North", 2500)]
shallow = today.copy()         # new list, same parcels
deep = copy.deepcopy(today)    # new list, new parcels

shallow.append(Parcel("P-221", "East", 800))
today[0].depot = "South"

print(len(today), len(shallow))
print(shallow[0].depot, deep[0].depot)
print(shallow[0] is today[0], deep[0] is today[0])
