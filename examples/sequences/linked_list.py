class Node:
    def __init__(self, pid, nxt=None):
        self.pid, self.next = pid, nxt


def show(head):
    out, node = [], head
    while node:
        out.append(node.pid)
        node = node.next
    return " -> ".join(out + ["None"])


def find(head, pid):                 # O(n): walk the links
    node = head
    while node and node.pid != pid:
        node = node.next
    return node


head = Node("P-104", Node("P-221", Node("P-458")))
print(show(head))

prev = find(head, "P-221")           # locate: O(n)
prev.next = Node("P-317", prev.next) # change: O(1)
print(show(head))

prev.next = prev.next.next           # delete P-317: O(1)
print(show(head))

head = head.next                     # delete the head
print(show(head))
