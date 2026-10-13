import math

print("   n  log2  n*log2     n^2  2^n")
for n in [8, 16, 32, 64]:
    lg = int(math.log2(n))
    print(f"{n:4}  {lg:4}  {n * lg:6}  {n * n:6}  {2 ** n}")

n = 100
print(sum(range(1, n + 1)), n * (n + 1) // 2)
print(sum(2 ** i for i in range(10)), 2 ** 10 - 1)
