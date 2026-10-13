from planner import PARCELS


def find_parcel(parcels, target):
    """Index of the first parcel whose pid == target,
    or None if no parcel has that pid."""
    for i in range(len(parcels)):
        if parcels[i].pid == target:
            return i
    return None


if __name__ == "__main__":
    print(find_parcel(PARCELS, "P-317"))
    print(find_parcel(PARCELS, "P-999"))
    print(find_parcel([], "P-317"))
