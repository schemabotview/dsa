from hashing import h

EMPTY, TOMB = None, "<tomb>"


def find_slot(slots, key):
    i = h(key, len(slots))
    while slots[i] is not EMPTY:        # stop only at EMPTY
        if slots[i] == key:
            return i
        i = (i + 1) % len(slots)        # linear probe
    return None


slots = [EMPTY] * 8
for pid in ["P-104", "P-221", "P-317", "P-458", "P-600"]:
    i = h(pid, 8)
    while slots[i] is not EMPTY:
        i = (i + 1) % 8
    slots[i] = pid
print(slots)

naive = list(slots)          # P-317 probed past P-221
naive[find_slot(naive, "P-221")] = EMPTY    # wrong delete
print("naive:", find_slot(naive, "P-317"))

tomb = list(slots)
tomb[find_slot(tomb, "P-221")] = TOMB       # tombstone
print("tomb: ", find_slot(tomb, "P-317"))
