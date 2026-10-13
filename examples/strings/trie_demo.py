from trie import Trie

t = Trie()
labels = ["NORTH", "NORTHEAST", "NORTHHUB", "NAVAL",
          "EAST", "EASTPORT"]
for w in labels:
    t.insert(w)
print(t.starts_with("NORTH"))
print(t.starts_with("EA"))
print(t.starts_with("SOUTH"))


def count(node):
    return 1 + sum(count(c) for k, c in node.items()
                   if k != "$")


print("trie nodes:", count(t.root),
      " letters stored:", sum(map(len, labels)))
