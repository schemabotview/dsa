def edit_distance(a, b):
    # D[i][j]: edits to turn a[:i] into b[:j]
    D = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(len(a) + 1):
        D[i][0] = i                     # delete all
    for j in range(len(b) + 1):
        D[0][j] = j                     # insert all
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            same = a[i - 1] == b[j - 1]
            D[i][j] = min(D[i - 1][j] + 1,          # delete
                          D[i][j - 1] + 1,          # insert
                          D[i - 1][j - 1] + (not same))
    return D


a, b = "DEPOT", "DEPART"
D = edit_distance(a, b)
print("    " + "  ".join(" " + b))
for i, row in enumerate(D):
    print((" " + a)[i], " ".join(f"{x:2}" for x in row))
print("distance:", D[-1][-1])
