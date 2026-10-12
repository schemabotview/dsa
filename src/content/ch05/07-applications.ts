import type { Section } from '../types'

export const applications: Section = {
  id: 'hashing-applications',
  title: 'Frequency counting, deduplication, memo lookup, and library boundaries',
  scene: 'applications',
  focus: 'code',
  slide: `## Applications

Most uses of hashing are one idea: **remember what you have seen**.

### Three patterns
- **Frequency table**: \`Counter\` counts scans per parcel in Θ(n)
- **Deduplication**: \`dict.fromkeys\` keeps the first of each, in order
- **Memo lookup**: store answers by input, reuse them

### A sliding window
- Longest run of scans with no repeat: \`last\` maps parcel → position
- A repeat inside the window moves \`start\` past its earlier copy
- Each end only moves forward: Θ(n); here, 5

### Library boundaries
- \`dict\` keeps **insertion** order; that is not sorted order
- Need range queries or sorted keys? Use the next chapter's trees`,
  narration:
    "Most practical uses of hashing come down to one idea: remember what you have already seen, and look it up in constant time. Three patterns cover a great deal of everyday code. The first is a frequency table. Counting how many times each parcel was scanned takes one pass with a counter, a dict from item to count, so the whole job is linear. The output shows P one-oh-four scanned three times and P two-twenty-one twice. The second is deduplication. Building a dict from the scans, with dict from keys, keeps the first occurrence of each parcel and discards the rest, in a single pass. The third is memo lookup: store each computed answer under its input, so a repeated question is answered from the table instead of being recomputed. Chapter twelve builds dynamic programming on exactly this. The script ends with a sliding window, the bounded technique from the plan. The question is the longest run of consecutive scans with no parcel repeated. A dict called last remembers the most recent position of each parcel. The window is from start to end. When the next scan repeats a parcel whose last position is inside the window, start jumps just past that earlier copy, which restores the condition. Both start and end only ever move forward, so the whole scan is linear. Here the longest run has five scans. It is worth being precise about what Python's dict promises. It keeps keys in insertion order, which is reliable and documented, but insertion order is not sorted order. A dict cannot efficiently answer the smallest key, the next key after this one, or every key in a range. When a problem needs order as well as fast lookup, a hash table is the wrong tool, and the ordered trees of the next chapter are the right one.",
}
