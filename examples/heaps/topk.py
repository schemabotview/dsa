import heapq

weights = [2500, 800, 5000, 1200, 300, 4100, 900, 3700]

top = []                               # min-heap of size k
for w in weights:                  # one pass, O(n log k)
    if len(top) < 3:
        heapq.heappush(top, w)
    elif w > top[0]:
        heapq.heapreplace(top, w)      # drop the smallest
print("3 heaviest:", sorted(top, reverse=True))
print("nlargest:  ", heapq.nlargest(3, weights))

north = [104, 317, 600]                # sorted per depot
east = [221, 512]
west = [458, 700, 712]
print("merged:", list(heapq.merge(north, east, west)))
