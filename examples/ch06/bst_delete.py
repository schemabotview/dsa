from bst import build
from traversals import inorder


def delete(root, key):
    if root is None:
        return None                     # absent: no change
    if key < root.key:
        root.left = delete(root.left, key)
    elif key > root.key:
        root.right = delete(root.right, key)
    elif root.left is None:             # 0 or 1 child
        return root.right
    elif root.right is None:
        return root.left
    else:                               # 2 children
        succ = root.right
        while succ.left is not None:    # smallest on right
            succ = succ.left
        root.key, root.value = succ.key, succ.value
        root.right = delete(root.right, succ.key)
    return root


root = build([317, 104, 458, 50, 221, 400, 600, 420])
for key in [50, 400, 317]:              # leaf, 1 child, 2
    root = delete(root, key)
    print(f"delete {key}:", inorder(root, []),
          "root", root.key)
