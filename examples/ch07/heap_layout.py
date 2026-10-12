def parent(i): return (i - 1) // 2
def left(i):   return 2 * i + 1
def right(i):  return 2 * i + 2


def is_min_heap(a):
    return all(a[parent(i)] <= a[i]
               for i in range(1, len(a)))


heap = [1, 3, 2, 7, 4, 5, 9]        # urgency levels
print("children of index 1:", left(1), right(1),
      "->", heap[left(1)], heap[right(1)])
print("parent of index 5:", parent(5),
      "->", heap[parent(5)])
print("min-heap?", is_min_heap(heap))
print("sorted? ", heap == sorted(heap))
