from bst import build


def height(node):                     # empty tree: -1
    if node is None:
        return -1
    return 1 + max(height(node.left), height(node.right))


def size(node):
    if node is None:
        return 0
    return 1 + size(node.left) + size(node.right)


def leaves(node):
    if node is None:
        return []
    if node.left is None and node.right is None:
        return [node.key]
    return leaves(node.left) + leaves(node.right)


if __name__ == "__main__":
    root = build([317, 104, 458, 50, 221, 400, 600])
    print("size", size(root), " height", height(root))
    print("leaves", leaves(root))
    print("one node:", height(build([317])),
          " empty:", height(None))
