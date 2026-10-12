import type { Section } from '../types'

export const pythonBaseline: Section = {
  id: 'python-baseline',
  title: 'The baseline in Python',
  scene: 'python-baseline',
  focus: 'code',
  slide: `## The baseline in Python

The pseudocode, translated line for line.

### Reading the code
- The docstring **is** the postcondition
- \`range(len(parcels))\` walks every valid index, in order
- \`return i\` exits at the **first** match
- Falling out of the loop means no index matched

### Reading the output
- \`P-317\` sits at index 2
- \`P-999\` is absent: \`None\`
- The empty list returns \`None\` without entering the loop

### Why None and not -1
- \`-1\` is a valid Python index: \`parcels[-1]\` is the **last** parcel
- \`None\` cannot be used as an index by mistake`,
  narration:
    "Here is the same algorithm in Python. The translation is deliberately literal, so you can lay it line by line against the pseudocode. The docstring states the postcondition, which keeps the contract and the code in one place. The loop walks the indices from zero up to the length of the list minus one, in order. If the identifier at position i equals the target, the function returns i immediately, and because the indices are visited in increasing order, the first one to match is also the least. If the loop finishes without returning, no index matched, so the function returns None. Below the code is what it actually printed under CPython three point one four. Looking up P three-seventeen gives two. Looking up an absent identifier gives None. And the empty list also gives None, because a range of length zero produces no indices, so the loop body never runs. Every code example in this course is a file that has been run, and the output shown is the output it produced. In a moment we will trace these runs step by step. One small design choice deserves a word. Many languages signal not found with minus one. In Python that is dangerous, because minus one is a valid index meaning the last element, so a caller who forgets to check would silently get the wrong parcel. None cannot be used as an index by mistake.",
}
