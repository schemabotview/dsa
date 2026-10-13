import type { Section } from '../types'

export const expectedCost: Section = {
  id: 'expected-cost-and-attacks',
  title: 'Expected cost, worst cases, randomness, and adversarial inputs',
  scene: 'adversarial',
  focus: 'out',
  slide: `## Expected cost and attacks

"Hash tables are Θ(1)" is an **expected** cost, under an assumption.

### The assumption
- Keys spread **evenly** over buckets, as if hashed at random
- Then expected chain length is \`n/m\` and operations are Θ(1)
- Worst case: every key in one bucket, Θ(n) per operation

### An adversary can arrange the worst case
- A sum-of-characters hash sends all anagrams to one bucket
- 24 anagram keys: 24 probes per lookup; varied keys: about 2.4
- Repeated, that turns a server's Θ(n) work into Θ(n²)

### Defences
- Mix every bit and position; bound buckets with trees
- A **random seed** per process: Python randomises \`str\` hashes`,
  narration:
    "It is common to hear that hash tables are constant time. That is an expected cost, and it rests on an assumption worth stating precisely. The assumption is that keys spread evenly over the buckets, as if each were placed at random. Under that assumption, the expected chain length is the load factor, n over m, and with the load factor bounded, every operation is constant time on average. But the worst case is very different. If every key lands in the same bucket, the table degenerates into one long list, and every operation costs linear time. The question is whether inputs can push a table into that worst case, and the answer is that an adversary can. The script uses a deliberately weak hash, the sum of the character codes. Any rearrangement of the same characters has the same sum, so all twenty-four anagrams of P one-two-three-four land in one bucket. The output shows the average lookup scanning twenty-four entries, compared with about two point four for twenty-four ordinary keys. That is a tenfold slowdown from twenty-four keys. An attacker who can choose the keys sent to a server, for instance the field names in a web request, can force every insertion into one chain, turning a linear amount of work into quadratic work. Attacks of this kind have taken real services offline. There are several defences. First, hash functions that mix every bit and position of the key, so simple rearrangements do not collide. Second, a random seed chosen when the program starts, so an attacker cannot predict which keys collide. This is why Python randomises the hash of strings in each process, and why the earlier examples used their own deterministic hash. Third, some libraries bound the damage by storing large buckets as balanced trees, which caps the worst case at logarithmic time.",
}
