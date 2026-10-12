import type { Section } from '../types'

export const rolling: Section = {
  id: 'rolling-hashes',
  title: 'Rolling hashes, collisions, and verified matches',
  scene: 'rolling',
  focus: 'out',
  slide: `## Rolling hashes

Compare **numbers** instead of strings: Rabin–Karp.

### The idea
- Hash the pattern, and every window of m text characters
- Only where the hashes agree is a match possible
- **Roll** the hash: drop the outgoing character, add the incoming one, O(1)

### Collisions are real
- Equal hashes do **not** mean equal strings
- With a tiny modulus, 11: three real PORTs, four false alarms
- Trusting the hash alone reports **seven** matches

### Verify, and choose the modulus well
- Compare the strings when hashes agree: expected O(n + m)
- Large random moduli make collisions rare, never impossible
- Hashing is not a proof of equality, as in Chapter 5`,
  narration:
    "A different approach to text search compares numbers instead of strings. The Rabin Karp algorithm computes a hash of the pattern, and a hash of every window of m characters in the text. A match is only possible where the two hashes agree, and comparing two numbers is much cheaper than comparing two strings. The trick that makes it fast is a rolling hash. The hash treats the window as a number written in a large base, reduced modulo M. Moving the window one place to the right means removing the outgoing character's contribution and adding the incoming one, which takes constant time, rather than rehashing all m characters. The crucial point is that equal hashes do not mean equal strings. Many different windows share each hash value, so collisions are not a theoretical risk. They will happen. The script makes this deliberately obvious by using a tiny modulus of eleven. Searching a route string for port, the correct version, which verifies each candidate by comparing the actual characters, finds the three real occurrences, and counts four false alarms where the hash matched but the text did not. The careless version, which trusts the hash alone, reports seven matches, four of them wrong. In practice, the modulus is a large prime, ideally chosen at random, which makes collisions rare, and with verification the expected running time is linear. But rare is not never, and an adversary who knows the modulus can construct collisions on purpose, just as with the hash tables of chapter five. So the rule is the same as there. A hash can quickly rule a candidate out. It can never, by itself, prove two strings equal. Rolling hashes are especially useful for searching many patterns at once, or for finding repeated blocks in long texts.",
}
