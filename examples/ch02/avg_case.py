import random
from count_ops import lookup_steps

n = 100
pids = [f"P-{k}" for k in range(n)]

worst = lookup_steps(pids, "absent")
every = sum(lookup_steps(pids, p) for p in pids) / n

rng = random.Random(2026)            # fixed seed
draws = [rng.choice(pids) for _ in range(1000)]
sample = sum(lookup_steps(pids, p) for p in draws) / 1000

print("worst case (absent):    ", worst)
print("average over all targets:", every)
print("1000 random targets:     ", sample)
