def lookup_steps(pids, target):
    steps = 0
    for pid in pids:
        steps += 1                 # one comparison
        if pid == target:
            break
    return steps


def pair_steps(pids):
    steps = 0
    for i in range(len(pids)):
        for j in range(i + 1, len(pids)):
            steps += 1             # pids[i] vs pids[j]
    return steps


if __name__ == "__main__":
    print(" n  lookup  all-pairs")
    for n in [4, 8, 16, 32]:
        pids = [f"P-{k}" for k in range(n)]
        print(f"{n:2}  {lookup_steps(pids, 'none'):6}"
              f"  {pair_steps(pids):9}")
