class RingBuffer:
    def __init__(self, capacity):
        self.slots = [None] * capacity
        self.head = self.size = 0

    def enqueue(self, x):
        if self.size == len(self.slots):
            raise OverflowError("queue full")
        tail = (self.head + self.size) % len(self.slots)
        self.slots[tail] = x
        self.size += 1

    def dequeue(self):
        if self.size == 0:
            raise IndexError("queue empty")
        x = self.slots[self.head]
        self.slots[self.head] = None
        self.head = (self.head + 1) % len(self.slots)
        self.size -= 1
        return x
