from ring import RingBuffer

q = RingBuffer(4)
for pid in ["P-104", "P-221", "P-317"]:
    q.enqueue(pid)
print(q.dequeue(), q.dequeue())
q.enqueue("P-458")
q.enqueue("P-512")                   # wraps to slot 0
print(q.slots, "head", q.head)
q.enqueue("P-600")
try:
    q.enqueue("P-700")
except OverflowError as e:
    print(e)
