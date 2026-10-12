def perms(xs):                  # all items distinct
    if not xs:
        yield ""
    for i, x in enumerate(xs):
        for rest in perms(xs[:i] + xs[i + 1:]):
            yield x + rest


def unique_perms(xs):           # xs sorted: skip repeats
    if not xs:
        yield ""
    for i, x in enumerate(xs):
        if i > 0 and xs[i] == xs[i - 1]:
            continue                # same choice, same tree
        for rest in unique_perms(xs[:i] + xs[i + 1:]):
            yield x + rest


stops = sorted("NNE")                   # two North stops
print("naive:    ", list(perms(stops)))
print("canonical:", list(unique_perms(stops)))
