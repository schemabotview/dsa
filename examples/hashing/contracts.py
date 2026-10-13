index = {"P-104": "North", "P-221": "East"}
index["P-317"] = "North"           # insert or overwrite
print(index.get("P-317"), index.get("P-999"))

try:
    index[["P-104"]] = "?"         # lists are unhashable
except TypeError as e:
    print("TypeError:", e)

d = {1: "int", 1.0: "float", True: "bool"}
print(d)                           # equal keys: one entry


class Tag:                         # hash of a mutable field
    def __init__(self, pid):
        self.pid = pid
    def __eq__(self, other):
        return self.pid == other.pid
    def __hash__(self):
        return hash(self.pid)


t = Tag("P-458")
seen = {t}
t.pid = "P-459"                    # mutated while stored
print(t in seen, Tag("P-458") in seen)
