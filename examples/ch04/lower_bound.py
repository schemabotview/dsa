import math

print(" n         n!  ceil(log2 n!)  n*log2(n)")
for n in [3, 4, 8, 16, 32]:
    leaves = math.factorial(n)
    need = math.ceil(math.log2(leaves))
    nlogn = n * math.log2(n)
    print(f"{n:2} {leaves:10.3g} {need:14} {nlogn:10.0f}")
