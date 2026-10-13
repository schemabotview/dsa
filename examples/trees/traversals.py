from bst import build


def inorder(node, out):              # left, node, right
    if node is None:                 # base case: empty
        return out
    inorder(node.left, out)
    out.append(node.key)
    inorder(node.right, out)
    return out


def inorder_iter(node):              # explicit stack
    out, stack = [], []
    while stack or node is not None:
        while node is not None:
            stack.append(node)       # remember, go left
            node = node.left
        node = stack.pop()
        out.append(node.key)
        node = node.right
    return out


if __name__ == "__main__":
    root = build([317, 104, 458, 50, 221, 400, 600])
    print("recursive:", inorder(root, []))
    print("iterative:", inorder_iter(root))
