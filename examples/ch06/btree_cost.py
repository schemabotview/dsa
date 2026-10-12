import math

n = 1_000_000_000                       # keys on disk
print(" branching   levels = block reads per lookup")
for b in [2, 16, 256, 1024]:
    levels = math.ceil(math.log(n, b))
    print(f"{b:9}   {levels}")
