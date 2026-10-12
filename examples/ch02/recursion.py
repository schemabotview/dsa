def halving_calls(n):
    if n <= 1:
        return 1
    return 1 + halving_calls(n // 2)


def fib_calls(n):
    if n < 2:
        return 1
    return 1 + fib_calls(n - 1) + fib_calls(n - 2)


print(" n  halving  branching")
for n in [5, 10, 20, 25]:
    print(f"{n:2}  {halving_calls(n):7}  {fib_calls(n):9}")
