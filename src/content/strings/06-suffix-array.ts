import type { Section } from '../types'

export const suffixArray: Section = {
  id: 'suffix-arrays',
  title: 'Suffix arrays and longest-common-prefix introduction',
  scene: 'suffix-array',
  focus: 'block',
  slide: `## Suffix arrays

Preprocess the **text** once, then answer many pattern queries quickly.

### The idea
- Start of every suffix, sorted: BANANA → 5, 3, 1, 0, 4, 2
- Every occurrence of a pattern begins some suffix
- So occurrences form one **contiguous block**

### Searching
- Binary search for the block: O(m log n) comparisons of characters
- ANA occurs at positions 1 and 3

### LCP
- Common prefix of neighbouring suffixes; a large value is a repeat: ANA

### Scope
- This sort is simple, not fast; linear-time constructions exist`,
  narration:
    "KMP and rolling hashes preprocess the pattern and then scan the whole text. When the same text will be searched for many different patterns, such as a long log searched over and over, it pays to preprocess the text instead. A suffix array is the standard structure for that. Take every suffix of the text, the text from each position to the end, and list their starting positions in sorted order of the suffixes. For banana, the sorted suffixes are A, A N A, A N A N A, banana, N A, and N A N A, so the suffix array is five, three, one, zero, four, two. The key observation is that every occurrence of a pattern is the beginning of some suffix. And in sorted order, all the suffixes that begin with the same pattern sit next to each other. So the occurrences of a pattern form one contiguous block of the suffix array, as the board shows for A N A, at positions one and three. Finding that block is a binary search over the sorted suffixes, which needs about log n comparisons, each comparing up to m characters, so a query costs m log n regardless of how many times the text is searched. The output also prints the LCP array, the length of the longest common prefix between each suffix and the one before it in sorted order. Large values reveal repeated substrings. The largest here is three, for the repeat A N A. LCP values support many further queries, such as finding the longest repeated substring, directly. One honest limit. The example builds the array by simply sorting suffixes, which is easy to read but slow, because comparing suffixes can take long. There are much faster constructions, including linear-time ones, which are beyond the scope of this course.",
}
