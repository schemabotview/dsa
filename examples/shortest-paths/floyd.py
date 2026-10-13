from weighted import INF

names = ["North", "East", "Hub", "West"]
w = {("North", "East"): 4, ("North", "Hub"): 12,
     ("East", "Hub"): 9, ("Hub", "West"): 7}
d = {(a, b): 0 if a == b else INF
     for a in names for b in names}
for (a, b), m in w.items():
    d[a, b] = d[b, a] = m

for k in names:                 # allow k as a stop
    for i in names:
        for j in names:
            if d[i, k] + d[k, j] < d[i, j]:
                d[i, j] = d[i, k] + d[k, j]

print("       " + "".join(f"{n:>7}" for n in names))
for i in names:
    row = "".join(f"{d[i, j]:>7}" for j in names)
    print(f"{i:7}" + row)
