def smallest_factor(n):
    steps, d = 0, 2
    while d * d <= n:
        steps += 1
        if n % d == 0:
            return d, steps
        d += 1
    return n, steps


for n in [97, 9_973, 999_983, 99_999_989]:
    factor, steps = smallest_factor(n)
    digits = len(str(n))
    print(f"{n:>10}  {digits} digits  {steps:>5} steps")
