import type { Section } from '../types'

export const doublyLinked: Section = {
  id: 'doubly-linked-lists',
  title: 'Doubly linked lists, sentinels, and structural invariants',
  scene: 'doubly-linked',
  focus: 'sentinel',
  slide: `## Doubly linked lists

Each node also points **back**, so a node can be removed without a search.

### The sentinel
- One dummy node closes the list into a ring and marks **both** ends
- The empty list is the sentinel pointing at itself
- No \`None\` checks: every node has a real \`prev\` and \`next\`

### The structural invariant
- For every node, \`node.next.prev is node\`
- Insert and remove each rewrite **four** or **two** links, all Θ(1)
- \`pids()\` asserts the invariant as it walks; the demo is a separate file

### What it buys and costs
- Removal given only the node: Θ(1); both ends Θ(1)
- Two references per node, and more writes to get right`,
  narration:
    "A doubly linked list gives each node a second reference, to the previous node. With links in both directions, a node can be removed when you hold only that node, without searching for its predecessor. The extra references also bring extra ways to get things wrong, and two ideas keep them under control. The first is a sentinel. Instead of letting the list end in None at each side, we add one dummy node that holds no data and closes the list into a ring. The sentinel's next is the first real node, and its prev is the last. An empty list is just the sentinel pointing at itself. With a sentinel, every real node always has a real previous and a real next node, so insertion and removal never need special cases for the front, the back, or an empty list. The code on the board has no checks for None at all. The second idea is a structural invariant. For every node, following next and then prev must lead back to the same node. Insertion before a node rewrites four links: the new node's prev and next, and the two neighbours that now point at it. Removal rewrites two. Each operation is constant time, and each must leave the invariant true. The pids method checks the invariant with an assertion on every node it visits, so a broken link fails loudly rather than producing a quietly wrong list. The output shows the empty list, three insertions including one in the middle, and two removals, each made with nothing but the node itself. The trade-off is memory and care. Each node carries two references instead of one, and each operation has more writes to order correctly. In return, removal given a node and operations at both ends are all constant time.",
}
