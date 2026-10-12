def prefix_function(pat):
    """pi[i]: length of the longest proper prefix of
    pat[:i+1] that is also a suffix of it."""
    pi = [0] * len(pat)
    k = 0
    for i in range(1, len(pat)):
        while k and pat[i] != pat[k]:
            k = pi[k - 1]                 # fall back
        if pat[i] == pat[k]:
            k += 1
        pi[i] = k
    return pi


def kmp_find(text, pat):
    pi, hits, k, steps = prefix_function(pat), [], 0, 0
    for i, ch in enumerate(text):
        while k and ch != pat[k]:
            k, steps = pi[k - 1], steps + 1
        steps += 1
        if ch == pat[k]:
            k += 1
        if k == len(pat):
            hits.append(i - k + 1)
            k = pi[k - 1]                 # allow overlaps
    return hits, steps
