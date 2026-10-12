def lcs(a, b):
    L = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i - 1] == b[j - 1]:
                L[i][j] = L[i - 1][j - 1] + 1
            else:
                L[i][j] = max(L[i - 1][j], L[i][j - 1])
    out, i, j = [], len(a), len(b)
    while i and j:                        # reconstruct
        if a[i - 1] == b[j - 1]:
            out.append(a[i - 1]); i -= 1; j -= 1
        elif L[i - 1][j] >= L[i][j - 1]:  # tie: go up
            i -= 1
        else:
            j -= 1
    return L[-1][-1], "".join(reversed(out))


print(lcs("DEPOT", "DEPART"))
print(lcs("NORTHHUB", "NORTHEASTHUB"))
