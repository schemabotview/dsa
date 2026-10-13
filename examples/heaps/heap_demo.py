from minheap import MinHeap

h = MinHeap()
for urgency in [5, 3, 8, 1, 9, 2]:
    h.push(urgency)
    print("push", urgency, "->", h.a)
print("pop order:", [h.pop() for _ in range(6)])
print("swaps:", h.swaps)
