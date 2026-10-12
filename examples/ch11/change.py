from itertools import combinations_with_replacement as cwr


def greedy(amount, stamps):
    used = []
    for s in sorted(stamps, reverse=True):   # largest first
        while amount >= s:
            amount -= s
            used.append(s)
    return used


def fewest(amount, stamps):                  # brute force
    for k in range(1, amount + 1):
        for combo in cwr(stamps, k):
            if sum(combo) == amount:
                return list(combo)


for stamps, amount in [([1, 2, 5, 10], 18), ([1, 3, 4], 6)]:
    print(stamps, amount, "greedy", greedy(amount, stamps),
          "best", fewest(amount, stamps))
