import heapq
from itertools import count

freq = {"N": 45, "E": 13, "W": 12, "S": 16, "H": 9, "P": 5}


def huffman(freq):
    tie = count()
    heap = [(f, next(tie), s) for s, f in freq.items()]
    heapq.heapify(heap)
    while len(heap) > 1:              # merge two rarest
        f1, _, a = heapq.heappop(heap)
        f2, _, b = heapq.heappop(heap)
        heapq.heappush(heap, (f1 + f2, next(tie), (a, b)))
    codes = {}

    def walk(node, code):
        if isinstance(node, str):
            codes[node] = code or "0"
        else:
            walk(node[0], code + "0")
            walk(node[1], code + "1")
    walk(heap[0][2], "")
    return codes


codes = huffman(freq)
for sym in sorted(codes, key=lambda s: -freq[s]):
    print(sym, freq[sym], codes[sym])
bits = sum(freq[s] * len(codes[s]) for s in freq)
print("Huffman bits:", bits,
      " fixed 3-bit:", 3 * sum(freq.values()))
