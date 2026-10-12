from collections import Counter

scans = ["P-104", "P-221", "P-104", "P-317", "P-221",
         "P-104", "P-458", "P-317", "P-512"]

print(Counter(scans).most_common(2))     # frequency table
print(list(dict.fromkeys(scans)))        # dedup, keep order


def longest_unique_run(xs):
    """Longest window with no repeated scan."""
    last, start, best = {}, 0, 0
    for end, x in enumerate(xs):
        if last.get(x, -1) >= start:   # repeat in window
            start = last[x] + 1
        last[x] = end
        best = max(best, end - start + 1)
    return best


print(longest_unique_run(scans))
