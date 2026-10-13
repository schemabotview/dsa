import timeit


def find_loop(pids, target):
    for i in range(len(pids)):
        if pids[i] == target:
            return i
    return None


def best_ms(fn):
    runs = timeit.repeat(fn, number=20, repeat=7)
    return min(runs) / 20 * 1000


for n in [100_000, 200_000, 400_000]:
    pids = [f"P-{k}" for k in range(n)]
    loop = best_ms(lambda: find_loop(pids, "x"))
    builtin = best_ms(lambda: "x" in pids)
    print(f"{n:7}  loop {loop:5.2f} ms"
          f"  in {builtin:5.2f} ms  x{loop / builtin:.1f}")
