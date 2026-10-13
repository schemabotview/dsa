import random

P = 1_000_003                          # a prime


def fingerprint(xs, x):
    f = 1
    for v in xs:
        f = f * (x - v) % P            # product of (x - v)
    return f


def same_multiset(a, b, trials, rng):
    """Equal lists give equal fingerprints at every x.
    Different ones agree at a random x with probability
    at most len(a) / P: a one-sided error."""
    for _ in range(trials):
        x = rng.randrange(P)
        if fingerprint(a, x) != fingerprint(b, x):
            return False               # certainly different
    return True                        # probably the same


rng = random.Random(14)
manifest = list(range(1000))
scanned = manifest[::-1]
swapped = manifest[:-1] + [5000]
for name, other in [("same parcels:", scanned),
                    ("one replaced:", swapped)]:
    print(name, same_multiset(manifest, other, 3, rng))
print(f"error per trial <= {1000 / P:.4f}; 3 trials:",
      f"{(1000 / P) ** 3:.1e}")
