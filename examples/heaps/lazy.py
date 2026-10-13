import heapq

queue, current = [], {}            # entries; live priority


def set_priority(pid, prio):       # no decrease-key needed
    current[pid] = prio
    heapq.heappush(queue, (prio, pid))


def pop_most_urgent():
    while queue:
        prio, pid = heapq.heappop(queue)
        if current.get(pid) == prio:  # else stale: skip
            del current[pid]
            return pid, prio
    return None


for pid, prio in [("P-104", 5), ("P-221", 3), ("P-317", 4)]:
    set_priority(pid, prio)
set_priority("P-104", 1)         # escalated: old one stale
print("entries:", len(queue), " live:", len(current))
print([pop_most_urgent() for _ in range(3)])
print("left in heap:", queue)
