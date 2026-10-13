class Node:
    def __init__(self, key):
        self.key, self.left, self.right = key, None, None
        self.height = 0


def h(n):
    return n.height if n else -1


def fix(n):                       # recompute stored height
    n.height = 1 + max(h(n.left), h(n.right))
    return n


def rotate_right(y):                   # y.left rises
    x = y.left
    y.left, x.right = x.right, y
    fix(y)
    return fix(x)


def rotate_left(x):                    # x.right rises
    y = x.right
    x.right, y.left = y.left, x
    fix(x)
    return fix(y)


def preorder(n):
    return [] if n is None else (
        [n.key] + preorder(n.left) + preorder(n.right))
