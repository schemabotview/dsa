B, M = 256, 11                      # tiny M: collisions


def rabin_karp(text, pat, verify=True):
    n, m = len(text), len(pat)
    hp = ht = 0
    for i in range(m):
        hp = (hp * B + ord(pat[i])) % M
        ht = (ht * B + ord(text[i])) % M
    high = pow(B, m - 1, M)
    hits, false_alarms = [], 0
    for s in range(n - m + 1):
        if hp == ht:                    # hashes agree...
            if not verify or text[s:s + m] == pat:
                hits.append(s)
            else:
                false_alarms += 1   # ...strings don't
        if s + m < n:                   # roll: drop, add
            ht = ((ht - ord(text[s]) * high) * B
                  + ord(text[s + m])) % M
    return hits, false_alarms


text = "SOUTHPORT-NORTHHUB-EASTPORT-WESTPORT"
print("verified:  ", rabin_karp(text, "PORT"))
print("hash only: ", rabin_karp(text, "PORT", verify=False))
