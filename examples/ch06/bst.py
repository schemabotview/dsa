class Node:
    def __init__(self, key, value=None):
        self.key, self.value = key, value
        self.left = self.right = None


def insert(root, key, value=None):
    if root is None:
        return Node(key, value)
    if key < root.key:
        root.left = insert(root.left, key, value)
    elif key > root.key:
        root.right = insert(root.right, key, value)
    else:
        root.value = value      # duplicate: overwrite
    return root


def search(root, key):
    path = []
    while root is not None:
        path.append(root.key)
        if key == root.key:
            return root, path
        root = root.left if key < root.key else root.right
    return None, path


def build(keys):
    root = None
    for k in keys:
        root = insert(root, k)
    return root
