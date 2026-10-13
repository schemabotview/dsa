import sys


def count_subsets_recursive(n, i=0):
    if i == n:
        return 1
    return (count_subsets_recursive(n, i + 1)
            + count_subsets_recursive(n, i + 1))


def deepest_path(n):                    # explicit stack
    stack, deepest = [0], 0
    while stack:
        depth = stack.pop()
        deepest = max(deepest, depth)
        if depth < n:
            stack.append(depth + 1)     # follow one branch
    return deepest


print("2^20 =", count_subsets_recursive(20))
print("limit:", sys.getrecursionlimit())
print("explicit stack reaches depth", deepest_path(5000))
for n in [20, 40, 60]:
    print(f"n={n}: {2**n:.2e} leaves")
