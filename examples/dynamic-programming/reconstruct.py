from memo_vs_table import opt_table, p, s

table = opt_table(len(s))


def walk_back(take_ties):
    chosen, i = [], len(s)
    while i > 0:                      # retrace the choices
        v = s[i - 1][2]
        take, skip = v + table[p[i - 1]], table[i - 1]
        if take > skip or (take == skip and take_ties):
            chosen.append(s[i - 1])
            i = p[i - 1]
        else:
            i -= 1
    return chosen[::-1]


print("best value:", table[-1])
for rule in (True, False):
    plan = walk_back(rule)
    print("ties ->", "take" if rule else "skip", plan,
          sum(v for *_, v in plan))
