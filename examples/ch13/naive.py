compares = 0


def naive_find(text, pat):
    """Every start position where pat occurs."""
    global compares
    hits = []
    for s in range(len(text) - len(pat) + 1):
        j = 0
        while j < len(pat):
            compares += 1
            if text[s + j] != pat[j]:
                break
            j += 1
        if j == len(pat):
            hits.append(s)                # overlaps allowed
    return hits


print(naive_find("ABABABA", "ABA"))     # overlapping hits
compares = 0
text, pat = "A" * 1000, "A" * 99 + "B"
print(naive_find(text, pat), "compares:", compares)
