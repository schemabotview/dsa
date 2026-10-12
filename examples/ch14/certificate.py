from itertools import combinations

weights = [3917, 2245, 8731, 1209, 5560, 7123, 4419, 6611,
           2980, 9104, 3377, 5821, 1666, 7790, 4048, 8253,
           2714, 6342, 1987, 5099, 3631, 7466]
target = 50000


def verify(chosen):                  # polynomial-time check
    return (len(set(chosen)) == len(chosen)
            and all(0 <= i < len(weights) for i in chosen)
            and sum(weights[i] for i in chosen) == target)


idx = range(len(weights))
found = next(c for k in range(len(weights) + 1)
             for c in combinations(idx, k)
             if sum(weights[i] for i in c) == target)
print("certificate:", found)
print("verified:", verify(found), " steps:", len(found))
print("search space: 2 **", len(weights), "=",
      2 ** len(weights), "subsets")
