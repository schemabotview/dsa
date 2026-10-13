from itertools import permutations


def weak_h(key, m):
    return sum(map(ord, key)) % m      # anagrams collide


def avg_probes(keys, m):
    buckets = [0] * m
    for k in keys:
        buckets[weak_h(k, m)] += 1
    # a lookup scans its key's whole chain
    return sum(c * c for c in buckets) / len(keys)


m = 64
anagrams = ["P-" + "".join(p) for p in permutations("1234")]
varied = [f"P-{n}" for n in range(1000, 1024)]
print("24 anagram keys:", avg_probes(anagrams, m))
print("24 varied keys: ", avg_probes(varied, m))
