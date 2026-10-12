from functools import cache

calls = 0


def fib(n):                         # plain recursion
    global calls
    calls += 1
    return n if n < 2 else fib(n - 1) + fib(n - 2)


@cache
def fib_memo(n):                    # each n solved once
    global calls
    calls += 1
    return n if n < 2 else fib_memo(n - 1) + fib_memo(n - 2)


for f in (fib, fib_memo):
    calls = 0
    value = f(25)
    print(f"{f.__name__:8} fib(25) = {value}"
          f"  calls: {calls}")
