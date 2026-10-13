class Node:
    def __init__(self, pid):
        self.pid, self.prev, self.next = pid, self, self


class DList:
    def __init__(self):
        self.sentinel = Node(None)  # empty: self-linked

    def insert_before(self, at, pid):
        node = Node(pid)
        node.prev, node.next = at.prev, at
        at.prev.next = node
        at.prev = node
        return node

    def remove(self, node):          # O(1), no search
        node.prev.next = node.next
        node.next.prev = node.prev

    def pids(self):
        out, node = [], self.sentinel.next
        while node is not self.sentinel:
            assert node.next.prev is node
            out.append(node.pid)
            node = node.next
        return out
