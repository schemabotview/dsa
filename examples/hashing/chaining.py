from chain import ChainedTable

t = ChainedTable(4)
for pid, depot in [("P-104", "North"), ("P-221", "East"),
                   ("P-317", "North"), ("P-458", "West"),
                   ("P-512", "East"), ("P-600", "North")]:
    t.put(pid, depot)
for i, chain in enumerate(t.buckets):
    print(i, [k for k, _ in chain])
print(t.get("P-458"), t.get("P-999"))
