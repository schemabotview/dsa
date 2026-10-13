import random
import quicksort as qs

for label, rng in [("last pivot", None),
                   ("random pivot", random.Random(7))]:
    qs.compares, xs = 0, list(range(1000))   # sorted
    qs.quicksort(xs, 0, len(xs) - 1, rng)
    print(f"{label:12}  sorted input: {qs.compares} compares")
