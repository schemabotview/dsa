import type { Section } from '../types'

export const chaining: Section = {
  id: 'separate-chaining',
  title: 'Separate chaining and collision resolution',
  scene: 'chaining',
  focus: 'buckets',
  slide: `## Separate chaining

Each bucket holds a small list, a **chain**, of the pairs that hashed there.

### Operations
- Hash to a bucket, then scan its chain comparing keys with \`==\`
- \`put\` overwrites an existing key or appends a new pair
- \`get\` returns \`None\` after scanning the whole chain

### Cost depends on chain length
- With \`n\` keys in \`m\` buckets, the average chain is **n / m**
- A lookup costs Θ(1 + n/m): constant while \`n/m\` stays bounded
- Here 6 keys in 4 buckets: bucket 0 holds three

### Trade-offs
- Simple, and deletion is easy: remove from one chain
- Extra objects per entry; chains scatter through memory`,
  narration:
    "The first strategy for collisions is separate chaining. Each bucket holds a small list, called a chain, of every key and value pair that hashed to that bucket. To put a pair, hash the key to find its bucket, then scan that bucket's chain. If the key is already there, overwrite its value. Otherwise append a new pair. To get, hash to the bucket and scan its chain, comparing keys with equality. If the scan reaches the end, the key is absent and the answer is None. Notice the two different roles. The hash only chooses where to look. Equality decides whether a stored key is actually the one we want. That is why the two must agree, the rule from the first section. The board shows a table with four buckets after six insertions. Three identifiers hashed to bucket zero, so its chain has three pairs. Bucket three is empty. A lookup for P four-fifty-eight checks one pair, while a lookup in bucket zero may check three. So the cost depends on chain length. If n keys are spread evenly over m buckets, the average chain has n over m pairs. That ratio is called the load factor. An operation costs one step to hash plus the length of the chain it scans, constant plus n over m. As long as the load factor stays bounded by a constant, every operation is constant time on average. Keeping it bounded is the subject of section five. Chaining is simple and robust. Deletion is easy, since a pair is simply removed from one chain, and the table keeps working even when it is overloaded, just more slowly. Its costs are memory and locality. Every chain is a separate list object, and following chains jumps around memory, which open addressing, next, avoids.",
}
