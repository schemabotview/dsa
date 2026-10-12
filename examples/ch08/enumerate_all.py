from itertools import combinations, permutations
from math import comb, factorial

items = ["N", "E", "W"]


def subsets_by_mask(xs):            # bit k set: take item k
    for mask in range(1 << len(xs)):
        yield [x for k, x in enumerate(xs) if mask >> k & 1]


def perms(xs):
    if not xs:
        yield []
    for i, x in enumerate(xs):          # choose x first
        for rest in perms(xs[:i] + xs[i + 1:]):
            yield [x] + rest


print("subsets:", list(subsets_by_mask(items)))
print("perms:  ", ["".join(p) for p in perms(items)])
print(len(list(perms(items))) == factorial(3),
      len(list(permutations(items))) == 6)
print("2 of 3:", list(combinations(items, 2)), comb(3, 2))
