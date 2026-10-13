s = "BANANA"
sa = sorted(range(len(s)), key=lambda i: s[i:])  # simple


def lcp(a, b):
    n = 0
    while n < min(len(a), len(b)) and a[n] == b[n]:
        n += 1
    return n


print(" i  lcp  suffix")
prev = ""
for i in sa:
    print(f"{i:2}  {lcp(prev, s[i:]):3}  {s[i:]}")
    prev = s[i:]

pat = "ANA"                              # binary search
lo = next(k for k, i in enumerate(sa) if s[i:] >= pat)
hits = [sa[k] for k in range(lo, len(sa))
        if s[sa[k]:].startswith(pat)]
print("ANA occurs at", sorted(hits))
