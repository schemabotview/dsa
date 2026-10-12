import type { Section } from '../types'

export const hashFunctions: Section = {
  id: 'hash-functions',
  title: 'Direct addressing, hash functions, and bucket selection',
  scene: 'hash-function',
  focus: 'hash',
  slide: `## Hash functions

Turn any key into an array index, so lookup becomes indexing.

### Direct addressing first
- Small integer keys can **be** the index: slot 104 for parcel 104
- Θ(1), but needs one slot per **possible** key, used or not

### Hash, then reduce
- A **hash function** maps a key to an integer; \`% m\` picks one of \`m\` buckets
- A good hash spreads similar keys apart and uses **every** character
- The output: 6 keys, 8 buckets, two pairs collide

### Collisions are certain
- More possible keys than buckets: some keys **must** share
- Table hashes are built for speed, not secrecy: **not** encryption`,
  narration:
    "A hash table turns lookup into indexing. To see the idea, start with the simplest case, direct addressing. If parcel numbers were small integers, the number could be the index: store parcel one hundred and four in slot one hundred and four. Every operation would be a single array access. The trouble is space. Direct addressing needs one slot for every possible key, whether it is used or not. Ten-digit identifiers would need ten billion slots to store a few thousand parcels. A hash table keeps the speed and drops the waste in two steps. First, a hash function turns any key into an integer. Then the integer is reduced modulo m, the number of buckets, to pick an index between zero and m minus one. The script uses a simple polynomial hash on the characters of the identifier, which is deterministic, so its output can be checked. Python's own hash for strings is randomised each time the interpreter starts, for a reason the sixth section explains. A good hash function spreads similar keys far apart and depends on every character of the key, so that P three-seventeen and P three-eighteen land in unrelated buckets. Even so, look at the output. With eight buckets, six identifiers already produce two collisions, pairs of keys that share a bucket. This is not bad luck. There are vastly more possible keys than buckets, so some keys must share. Collisions are certain, and a hash table is defined by how it handles them. The next two sections show the two main strategies. One last clarification, because the word is overloaded. The hash functions used for tables are designed to be fast, not secret. They provide no security, and they are not encryption. Cryptographic hashes are a different tool, built for a different contract.",
}
