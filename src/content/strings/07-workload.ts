import type { Section } from '../types'

export const workload: Section = {
  id: 'text-tradeoffs',
  title: 'Workload, preprocessing, alphabet, and memory trade-offs',
  scene: 'workload',
  focus: 'choice',
  slide: `## Choosing a text structure

Each tool answers a different **query**, with a different preprocessing cost.

### Match the tool to the workload
- One search in modest text: the built-in \`str.find\` or \`in\`
- A worst-case guarantee: KMP, O(n + m)
- Many patterns over one fixed text: a suffix array
- Prefixes of a word set: a trie; near-duplicates: rolling hashes

### Library boundaries
- CPython's built-in search is **not** the teaching KMP
- One recorded run: built-in ~20 µs, \`kmp_find\` ~3 ms
- Interpreted Python loops are slow; the built-in is written in C

### Always state
- Alphabet, normalisation, case, and whether overlaps count`,
  narration:
    "This chapter has introduced several tools, and they answer different questions at different costs, so the choice should follow the workload. The table on the board summarises it. For a single search in a modest amount of text, use the built-in string find method or the in operator. For a guaranteed linear worst case, use KMP, which never rescans the text. When one fixed text will be searched for many different patterns, preprocess the text into a suffix array, and answer each query in m log n. When the questions are about prefixes of a set of words, such as completing a depot name as it is typed, use a trie. And rolling hashes suit finding repeated or near-duplicate blocks. It is important to understand the boundary between these teaching algorithms and Python's library. CPython's own string search is not the KMP shown in this chapter. It uses its own optimised method, written in C. The script times them on the same text, and the card shows one recorded run, labelled as such. The built-in search took about twenty microseconds, and the hand-written KMP about three milliseconds, more than a hundred times slower. That gap is not a verdict on KMP's algorithm, which has an excellent guarantee. It reflects interpreted Python loops against compiled code, a constant factor of exactly the kind chapter two warned about. The practical lesson is to use the library for production text search, and to understand these algorithms so you know what guarantees exist, when to need them, and how to reason about cost. Whatever tool is chosen, state the assumptions in the contract: the alphabet, the normalisation form, whether comparison ignores case, and whether overlapping occurrences count.",
}
