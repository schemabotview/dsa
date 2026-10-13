import random
import sys
from bst import build
from shape import height

sys.setrecursionlimit(5000)
n = 1000
keys = list(range(n))
print("sorted inserts:  height", height(build(keys)))

random.Random(6).shuffle(keys)
print("shuffled inserts: height", height(build(keys)))
print("best possible:    height", (n).bit_length() - 1)
