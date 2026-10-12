from collections import deque

loading = deque(["P-104", "P-221"])
loading.append("P-317")              # join at the back
loading.appendleft("P-900")          # urgent: the front
print(loading)
print(loading.popleft(), loading.pop())

recent = deque(maxlen=3)             # last 3 scans only
for pid in ["P-104", "P-221", "P-317", "P-458"]:
    recent.append(pid)
print(recent)

loading.rotate(1)                    # last item to front
print(loading)
