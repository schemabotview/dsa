import type { Section } from '../types'

export const singlyLinked: Section = {
  id: 'singly-linked-lists',
  title: 'Singly linked lists and locating versus changing a node',
  scene: 'singly-linked',
  focus: 'n-317',
  slide: `## Singly linked lists

Each **node** holds an item and a reference to the **next** node.

### Two costs, kept apart
- **Locating** a node means walking from the head: Θ(n)
- **Changing** the list at a node you hold: Θ(1), a few pointer writes
- Insert after \`P-221\`: new node points at \`P-458\`, then \`P-221\` points at it

### Order of writes matters
- Set the new node's \`next\` **first**, or the rest of the list is lost
- Delete after a node: \`prev.next = prev.next.next\`

### Boundaries
- Deleting the head moves \`head\` itself
- Empty and single-node lists need their own trace
- No index: \`list[i]\` becomes a walk of \`i\` steps`,
  narration:
    "A linked list stores a sequence differently. Instead of one block, each item lives in its own node, and each node holds a reference to the next node. The list is reached through a single reference to the first node, called the head, and the last node points at None. The key to reasoning about linked lists is to keep two costs apart. Locating a node means walking from the head, following next references one at a time, so finding a parcel by identifier costs linear time. Changing the list at a node you already hold is different. It only rewrites a few references, so it costs constant time, whatever the length. The board shows both. First we walk to P two-twenty-one. Then we insert P three-seventeen after it, with two writes. The new node's next is set to P four-fifty-eight, and then P two-twenty-one's next is set to the new node. The order of those writes matters. If P two-twenty-one were redirected first, the only reference to the rest of the list would be overwritten, and everything after it would be lost. Deletion after a node is a single write: the previous node's next skips over the deleted one. The output shows the list before and after insertion, after deleting the new node again, and after deleting the head. Deleting the head is a boundary case, because there is no previous node. The head reference itself has to move. Empty lists and single-node lists need their own traces too, since the loops that walk the list run zero or one times there. The cost of all this flexibility is indexing. There is no address arithmetic, so reaching position i means walking i links. A linked list is the right choice when you already hold references to the places you change, and the wrong one when you mainly look things up by position.",
}
