from knapsack import ITEMS, CAP, knapsack, subset_sum

K = knapsack(ITEMS, CAP)
print("best value:", K[-1][CAP])
c, take = CAP, []
for i in range(len(ITEMS), 0, -1):       # reconstruct
    if K[i][c] != K[i - 1][c]:
        take.append(ITEMS[i - 1])
        c -= ITEMS[i - 1][0]
print("take:", take[::-1])
print("subset sum 9 from weights:",
      subset_sum([w for w, _ in ITEMS], 9))
