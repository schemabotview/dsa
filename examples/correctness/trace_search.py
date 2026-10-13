from planner import PARCELS


def find_parcel_traced(parcels, target):
    for i in range(len(parcels)):
        hit = parcels[i].pid == target
        print(f"i={i}  pid={parcels[i].pid}  match={hit}")
        if hit:
            return i
    print(f"loop ended with i == len == {len(parcels)}")
    return None


print("result:", find_parcel_traced(PARCELS, "P-317"))
