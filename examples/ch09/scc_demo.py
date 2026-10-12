from scc import kosaraju

# one-way streets between six stops
streets = {"A": ["B"], "B": ["C"], "C": ["A", "D"],
           "D": ["E"], "E": ["D", "F"], "F": []}
comp = kosaraju(streets)
groups = {}
for v, root in comp.items():
    groups.setdefault(root, []).append(v)
print("components:",
      sorted(sorted(g) for g in groups.values()))

dag = {(comp[v], comp[w])
       for v in streets for w in streets[v]
       if comp[v] != comp[w]}
print("condensation edges:", sorted(dag))
