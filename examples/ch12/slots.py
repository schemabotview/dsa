from bisect import bisect_right

# (start, finish, value) for the dock, from Chapter 11
SLOTS = [(0, 3, 2), (2, 9, 10), (4, 6, 2), (7, 8, 2),
         (8, 12, 4), (10, 13, 3), (12, 15, 5)]


def prepare(slots):
    s = sorted(slots, key=lambda x: x[1])   # by finish
    finishes = [f for _, f, _ in s]
    # p[i]: how many slots finish by the time slot i starts
    p = [bisect_right(finishes, st) for st, _, _ in s]
    return s, p
