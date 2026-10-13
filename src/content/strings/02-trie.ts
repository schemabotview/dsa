import type { Section } from '../types'

export const trie: Section = {
  id: 'tries',
  title: 'Tries, prefix lookup, and representation choices',
  scene: 'trie',
  focus: 'tree',
  slide: `## Tries

A tree keyed by **characters**: each path from the root spells a prefix.

### Structure
- Each node maps a character to a child; a marker ends a stored word
- Words that share a prefix **share** its path
- NORTH, NORTHEAST, NORTHHUB: one path, two short branches

### Prefix lookup
- Walk the prefix, one node per character: O(length of prefix)
- Then collect every word below that node
- Unknown prefix: stop as soon as a character is missing

### Representation choices
- A dict per node is flexible but costs memory per node
- Here 25 nodes hold 39 letters of labels
- Arrays per node suit small, fixed alphabets`,
  narration:
    "A trie is a tree organised by characters rather than by whole keys. The root represents the empty string. Each node maps a character to a child node, so every path from the root spells out a prefix, and a special marker on a node says that a complete stored word ends there. Words that share a prefix share the path that spells it. The board shows part of a trie built from depot labels. North, north east and north hub all begin with the same five letters, so they share one path for N, O, R, T, H, and only then branch, into E A S T and H U B. Naval shares only the first N. That sharing is what makes tries efficient for questions about prefixes. To find every label that starts with a given prefix, walk down from the root one character at a time. That costs time proportional to the length of the prefix, regardless of how many labels are stored. Then collect every complete word in the subtree below. The demo asks for labels starting with north and gets all three, and labels starting with E A, which gives east and east port. If any character of the prefix is missing along the way, the search stops immediately with no results, as it does for south. Tries also involve a representation choice. This version uses a Python dict at each node, which handles any alphabet but costs memory for every node. Here the trie has twenty-five nodes for thirty-nine letters of labels, so the sharing saved some space. For a small, fixed alphabet, such as digits, an array of children per node is faster and more compact. Tries answer prefix questions. They are not a general substring search, which the next sections take up.",
}
