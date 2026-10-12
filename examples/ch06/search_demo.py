from bst import build, insert, search

depots = build([317, 104, 458, 50, 221, 400, 600])
for key in [221, 600, 300]:
    node, path = search(depots, key)
    print(key, "found" if node else "absent", "path", path)

insert(depots, 300, "West")      # where the search failed
node, path = search(depots, 300)
print(300, node.value, "path", path)
