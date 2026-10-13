from probing_set import ProbingSet

s = ProbingSet()
for n in range(1, 1001):
    s.add(f"P-{n}")
    if n in (4, 5, 100, 1000):
        load = n / len(s.slots)
        print(f"n={n:4}  m={len(s.slots):4}"
              f"  load={load:.2f}  moves={s.moves}")
