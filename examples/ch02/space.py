import sys

copied = 0


def total_slices(xs):
    global copied
    if not xs:
        return 0
    copied += len(xs) - 1          # xs[1:] is a new list
    return xs[0] + total_slices(xs[1:])


def total_index(xs, i=0):
    if i == len(xs):
        return 0
    return xs[i] + total_index(xs, i + 1)


xs = list(range(500))
print(total_slices(xs), total_index(xs))
print("elements copied by slicing:", copied)
print("recursion limit:", sys.getrecursionlimit())
try:
    total_index(list(range(5000)))
except RecursionError:
    print("5000 deep: RecursionError")
