roads = [("North", "Hub", 12), ("North", "East", 4),
         ("East", "Hub", 9), ("Hub", "West", 7),
         ("West", "South", 6), ("South", "Port", 10),
         ("East", "Port", 30), ("Hub", "South", 15)]

group = {v: {v} for a, b, _ in roads for v in (a, b)}
for a, b, w in sorted(roads, key=lambda r: r[2]):
    if group[a] is group[b]:
        print(f"skip {a}-{b} {w}: closes a cycle")
        continue
    side = group[a]                      # one side of a cut
    crossing = [r for r in roads
                if (r[0] in side) != (r[1] in side)]
    lightest = min(r[2] for r in crossing)
    print(f"take {a}-{b} {w}: lightest of", len(crossing),
          "crossing edges?", w == lightest)
    merged = group[a] | group[b]
    for v in merged:
        group[v] = merged
