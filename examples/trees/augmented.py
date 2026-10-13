from bst import build


def size(n):
    return 0 if n is None else n.size


def annotate(n):                  # store subtree sizes
    if n is not None:
        annotate(n.left)
        annotate(n.right)
        n.size = 1 + size(n.left) + size(n.right)


def rank(n, key):
    """How many stored keys are < key: O(height)."""
    if n is None:
        return 0
    if key <= n.key:
        return rank(n.left, key)
    return size(n.left) + 1 + rank(n.right, key)


root = build([317, 104, 458, 50, 221, 400, 600])
annotate(root)
print("rank(400):", rank(root, 400))
in_range = rank(root, 451) - rank(root, 100)
print("keys in [100, 450]:", in_range)
