import type { Section } from '../types'

export const openAddressing: Section = {
  id: 'open-addressing',
  title: 'Open addressing, probing, deletion, and tombstones',
  scene: 'probing',
  focus: 'slots',
  slide: `## Open addressing

All keys live **in the array itself**; a collision moves on to another slot.

### Linear probing
- Start at the key's hash slot; if taken, try the next, wrapping round
- Lookup follows the same **probe path** and stops at an **empty** slot
- \`P-317\` hashes to 4, finds \`P-221\` there, and is stored in 5

### Deletion breaks the path
- Emptying slot 4 makes a later lookup stop **before** reaching slot 5
- \`naive: None\`: \`P-317\` is still stored, but unreachable

### Tombstones
- Mark deleted slots: lookups **continue** past them; inserts may reuse them
- Too many tombstones slow lookups until the table is rebuilt`,
  narration:
    "The second strategy, open addressing, keeps every key in the array itself, with no chains. When a key's slot is taken, it moves on to another slot according to a fixed rule called a probe sequence. The simplest rule is linear probing: try the hash slot, then the next one, then the next, wrapping round at the end of the array. A lookup follows exactly the same probe path. It stops with success when it finds the key, and stops with failure when it reaches an empty slot, because an insertion would have used that empty slot if the key had been added. The board shows eight slots after five insertions. P three-seventeen hashed to slot four, found P two-twenty-one already there, and was stored one step along, in slot five. Now consider deleting P two-twenty-one. The obvious approach is to empty its slot. But that breaks the reasoning behind every lookup. A search for P three-seventeen starts at slot four, finds it empty, and stops, concluding that the key is absent. The output confirms it: the naive deletion returns None, even though P three-seventeen is still sitting in slot five. It has become unreachable. The standard fix is a tombstone. Instead of emptying the slot, mark it as deleted. Lookups treat a tombstone as occupied by something else and keep probing, so the path to slot five stays intact. The output shows the tombstone version finding P three-seventeen in slot five. Insertions may reuse tombstone slots. Tombstones have a cost of their own. They lengthen probe paths without holding any data, so a table with many deletions gets slower, and is eventually rebuilt from scratch to clear them. In return, open addressing stores everything in one array, which is compact and fast to scan.",
}
