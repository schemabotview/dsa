weights = [2500, 800, 5000, 1200]       # four parcels
CAP = 6000                              # per van
copies = 0


def assign(i, loads, plan, found):
    if i == len(weights):
        found.append(plan[:])          # copy at a leaf only
        return
    for van in range(len(loads)):
        if loads[van] + weights[i] <= CAP:
            loads[van] += weights[i]    # make the choice
            plan.append(van)
            assign(i + 1, loads, plan, found)
            plan.pop()                  # undo it
            loads[van] -= weights[i]


def assign_copying(i, loads, plan, found):
    global copies
    if i == len(weights):
        found.append(plan)
        return
    for van in range(len(loads)):
        if loads[van] + weights[i] <= CAP:
            new = loads[:]; new[van] += weights[i]
            copies += 2                 # two new lists
            assign_copying(i + 1, new, plan + [van], found)
