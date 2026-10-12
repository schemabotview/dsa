import type { Section } from '../types'

export const contracts: Section = {
  id: 'set-and-map-contracts',
  title: 'Set/map contracts, equality, hashability, and key lifetime',
  scene: 'contracts',
  focus: 'out',
  slide: `## Sets and maps

A **map** stores one value per key; a **set** stores keys alone.

### The contract
- \`put\`, \`get\`, \`delete\`, membership: order is not part of it
- Keys are found by **equality**, \`==\`, not by position
- Goal: expected Θ(1) per operation, with no sorting

### Hashability
- A key needs \`__hash__\` consistent with \`__eq__\`: equal keys, equal hashes
- Lists are mutable, so not hashable: \`TypeError\`
- \`1 == 1.0 == True\`: one entry, the **first** key, the **last** value

### Key lifetime
- Never change a key while it is stored
- After \`t.pid\` changes, neither old nor new value finds it: \`False False\``,
  narration:
    "Chapter one's lookup scanned the list. Sorting made lookups logarithmic. This chapter goes further, to lookups that cost constant time on average, and it starts with what the structure promises. A map stores one value for each key: parcel identifier to depot, for instance. A set stores keys alone, and answers only whether a key is present. The operations are put, get, delete and membership, and notice what is missing. Order is not part of the contract. Keys are found by equality, not by position, and the goal is expected constant time per operation, with no sorting at all. Python's dict and set provide exactly this. The script on the board shows the contract and three ways it can surprise. First, a key must be hashable. It needs a hash function consistent with its equality: any two equal keys must have the same hash. Lists can change, so Python refuses them as keys with a type error. Second, keys are compared by equality, and equality can cross types. In Python, one, one point nought and True are all equal, and they have equal hashes, so a dict built from all three ends up with a single entry. It keeps the first key that was inserted and the last value that was assigned. Third, key lifetime. The Tag class computes its hash from a field that can be changed. The script stores a tag in a set, then changes its identifier. Now the stored object sits in the bucket for its old hash, while lookups for it go to the bucket for its new one. The output shows that neither the old value nor the new value finds it. The object is still in the set, but unreachable. The rule is simple: never change a key while it is stored in a hash-based structure, which is why Python's built-in immutable types make the safest keys.",
}
