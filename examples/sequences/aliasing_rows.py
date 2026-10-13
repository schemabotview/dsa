rows = [[0] * 3] * 3                 # 3 names, ONE row
rows[0][0] = 1
print(rows)
print(rows[0] is rows[1])

rows = [[0] * 3 for _ in range(3)]   # 3 separate rows
rows[0][0] = 1
print(rows)
print(rows[0] is rows[1])
