from avl import Node, h, fix, rotate_left, rotate_right
from avl import preorder


def insert(n, key):
    if n is None:
        return Node(key)
    if key < n.key:
        n.left = insert(n.left, key)
    else:
        n.right = insert(n.right, key)
    fix(n)
    balance = h(n.left) - h(n.right)
    if balance > 1:                    # left too tall
        if key > n.left.key:
            n.left = rotate_left(n.left)     # left-right
        return rotate_right(n)
    if balance < -1:                   # right too tall
        if key < n.right.key:
            n.right = rotate_right(n.right)  # right-left
        return rotate_left(n)
    return n


root = None
for k in [50, 104, 221, 317, 400, 458, 600]:   # sorted!
    root = insert(root, k)
print("height", root.height, "preorder", preorder(root))
