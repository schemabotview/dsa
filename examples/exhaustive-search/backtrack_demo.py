import backtrack as bt

found = []
bt.assign(0, [0, 0], [], found)
print("feasible plans:", len(found))
print("first three:", found[:3])

found = []
bt.assign_copying(0, [0, 0], [], found)
print("copying version:", len(found), "plans,",
      bt.copies, "lists built")
