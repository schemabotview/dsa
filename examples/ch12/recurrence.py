from slots import SLOTS, prepare

s, p = prepare(SLOTS)
for i, (st, f, v) in enumerate(s, 1):
    print(f"slot {i}: [{st:2},{f:2}) value {v:2}"
          f"  p = {p[i-1]}")

# OPT(i) = best value using only the first i slots
#   OPT(0) = 0
#   OPT(i) = max(OPT(i-1),            skip slot i
#                v_i + OPT(p(i)))     take it, drop clashes
