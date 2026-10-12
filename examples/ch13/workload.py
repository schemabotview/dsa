import timeit
from kmp import kmp_find

text = ("NORTH-EAST-WEST-SOUTH-" * 2000) + "PORT"
runs = [("str.find", lambda: text.find("PORT")),
        ("in", lambda: "PORT" in text),
        ("kmp_find", lambda: kmp_find(text, "PORT"))]
for name, fn in runs:
    t = min(timeit.repeat(fn, number=20, repeat=5)) / 20
    print(f"{name:9} {t * 1e6:9.1f} µs")
