import type { Section } from '../types'

export const kmp: Section = {
  id: 'kmp',
  title: 'Prefix functions, failure links, and KMP',
  scene: 'kmp',
  focus: 'pi',
  slide: `## Prefix functions and KMP

Remember what a partial match proved, and **never** move back in the text.

### The prefix function
- **pi[i]**: longest proper prefix of pat[:i+1] that is also its suffix
- For ABABAC: 0, 0, 1, 2, 3, 0
- ABABA starts and ends with ABA: pi = 3

### Knuth–Morris–Pratt
- On a mismatch after k matched characters, fall back to pi[k − 1]
- That border is **already** matched: nothing is reread
- After a full match, fall back too: overlaps are found

### Cost
- O(m) to build pi, O(n) to scan: O(n + m) in the worst case
- Naive's worst case: 90,100 comparisons; KMP: 1901 steps`,
  narration:
    "The Knuth Morris Pratt algorithm, KMP for short, removes the waste by remembering what a partial match proved. Its key ingredient is the prefix function of the pattern, computed once before the search. For each position i, pi of i is the length of the longest proper prefix of the pattern, up to and including i, that is also a suffix of it. Such a prefix and suffix pair is called a border. It is worth reading the table on the board slowly. For the pattern A B A B A C, the prefix A B A B A ends with A B A, which is also how it starts, so pi at that position is three. The full pattern, ending in C, has no border at all, so its entry is zero. Here is why that helps. Suppose the search has matched k characters of the pattern and then hits a mismatch. Those k matched characters are known exactly: they are the first k characters of the pattern. The longest border of that prefix tells us how much of it can serve as the start of the next possible match. So instead of moving back in the text, KMP keeps its place in the text and falls back in the pattern to position pi of k minus one, and tries again. No character of the text is ever read twice for the same purpose. After a complete match it falls back the same way, which is how overlapping occurrences are found, as the output shows for A B A in A B A B A B A. Building pi costs time proportional to m, and the scan costs time proportional to n, so KMP is linear, n plus m, even in the worst case. On the input that cost the naive algorithm ninety thousand one hundred comparisons, KMP takes one thousand nine hundred and one steps.",
}
