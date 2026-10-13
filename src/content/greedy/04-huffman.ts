import type { Section } from '../types'

export const huffman: Section = {
  id: 'huffman-coding',
  title: 'Huffman coding, prefix codes, and priority queues',
  scene: 'huffman',
  focus: 'tree',
  slide: `## Huffman coding

Give frequent symbols short codes, rare ones long codes.

### Prefix codes
- No code is a prefix of another: decoding is unambiguous
- A prefix code is a binary tree: symbols at leaves, path = code

### The greedy rule
- Repeatedly **merge the two rarest** trees; a heap holds them
- The rarest symbols end up deepest: P = 1100, N = 0
- Exchange: the two rarest can always be deepest siblings

### The result
- 100 depot scans: **224** bits, versus 300 with fixed 3-bit codes
- Optimal prefix code for **fixed, known** frequencies; no context`,
  narration:
    "Huffman coding applies the greedy idea to compression. Suppose the dispatch log records which depot each scan came from, and North appears far more often than Port. A fixed-length code spends the same number of bits on every symbol, three bits for six depots. A better code gives frequent symbols short codes and rare symbols long ones. To be decodable, the code must be a prefix code: no symbol's code is the beginning of another's. Then a stream of bits can be read from the start, and each symbol is recognised the moment its last bit arrives. Every prefix code corresponds to a binary tree, with the symbols at the leaves and each code spelling out the path from the root, zero for left and one for right. The board shows the tree Huffman's algorithm builds. Its greedy rule is simple. Put every symbol in a heap, weighted by its frequency. Repeatedly remove the two rarest trees and merge them under a new parent whose weight is their sum. The first merge joins P and H into a tree of weight fourteen. When one tree remains, it is the code tree. Because the rarest symbols are merged first, they end up deepest, with long codes such as one one zero zero for P, while North, the most frequent, gets the single bit zero. An exchange argument proves this is optimal: in some optimal tree, the two rarest symbols can be swapped into the deepest pair of sibling leaves without increasing the cost, and the same reasoning repeats on the merged problem. For these hundred scans, Huffman coding uses two hundred and twenty-four bits, against three hundred with fixed three-bit codes. The model has limits worth stating. It is optimal among codes that encode one symbol at a time, for fixed, known frequencies, and it ignores any context between symbols.",
}
