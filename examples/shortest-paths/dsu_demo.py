from dsu import DSU

d = DSU(["North", "East", "Hub", "West", "South"])
for a, b in [("North", "East"), ("Hub", "West"),
             ("East", "Hub"), ("West", "North")]:
    print(f"union {a:5} {b:5} ->", d.union(a, b))
for a, b in [("North", "West"), ("North", "South")]:
    print(f"same set {a}, {b}:", d.find(a) == d.find(b))
print("parents:", d.parent)
