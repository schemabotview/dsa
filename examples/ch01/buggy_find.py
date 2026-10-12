from planner import PARCELS


def find_parcel_buggy(parcels, target):
    for i in range(len(parcels)):
        if parcels[i].pid == target:
            return i
        else:
            return None    # gives up after one look
    return None


tests = [("P-104", 0), ("P-999", None), ("P-000", None)]
for target, want in tests:
    print(target, find_parcel_buggy(PARCELS, target) == want)

print("P-317", find_parcel_buggy(PARCELS, "P-317"), "want 2")
