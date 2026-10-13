from planner import Parcel, PARCELS
from find_parcel import find_parcel

dupes = [Parcel("P-221", "East", 800),
         Parcel("P-221", "West", 900)]

cases = [
    ("empty list", [], "P-104"),
    ("single, hit", PARCELS[:1], "P-104"),
    ("first item", PARCELS, "P-104"),
    ("last item", PARCELS, "P-458"),
    ("missing", PARCELS, "P-999"),
    ("duplicate", dupes, "P-221"),
]
for name, parcels, target in cases:
    print(f"{name:12} -> {find_parcel(parcels, target)}")

i = find_parcel(PARCELS, "P-104")
print("if i:", bool(i), "  if i is not None:", i is not None)
