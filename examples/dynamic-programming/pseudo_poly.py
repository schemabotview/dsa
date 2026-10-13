from knapsack import knapsack

items = [(5, 10), (4, 40), (6, 30), (3, 50)]
print("capacity   bits   table cells  best")
for cap in [10, 100, 1000, 10000]:
    scaled = [(w * cap // 10, v) for w, v in items]
    cells = (len(items) + 1) * (cap + 1)
    print(f"{cap:8}   {cap.bit_length():4}   {cells:11,} ",
          knapsack(scaled, cap)[-1][-1])
