import type { Section } from '../types'

export const sequences: Section = {
  id: 'edit-distance-and-lcs',
  title: 'Sequence problems, longest common subsequence, and edit distance',
  scene: 'sequences',
  focus: 'out',
  slide: `## Edit distance and LCS

Comparing two sequences: the states are **pairs of prefixes**.

### Edit distance
- **D[i][j]**: fewest edits turning the first i letters of a into the first j of b
- Edges of the table: i deletions, or j insertions
- Each cell: the minimum of delete, insert, or replace-or-keep
- DEPOT → DEPART: 2 edits, replace O with A and insert R

### Longest common subsequence
- **L[i][j]**: longest subsequence shared by the two prefixes
- Equal letters extend the diagonal; otherwise take the better neighbour
- DEPOT and DEPART share DEPT

### Cost
- (n + 1)(m + 1) states, O(1) each: Θ(nm) time and space`,
  narration:
    "Dynamic programming is especially natural for comparing two sequences, because the subproblems are pairs of prefixes. The first example is edit distance: the fewest single-letter edits, meaning insertions, deletions or replacements, that turn one string into another. It is how a system can suggest that a mistyped depot label probably meant a real one. The state D of i and j is the fewest edits that turn the first i letters of a into the first j letters of b. The boundaries are easy. Turning i letters into nothing takes i deletions, and turning nothing into j letters takes j insertions. For every other cell, consider the last letters of the two prefixes. We can delete a's last letter, costing one plus the cell above. We can insert b's last letter, costing one plus the cell to the left. Or we can match the two last letters, which is free if they are equal and costs one replacement if not, plus the cell diagonally above-left. The cell takes the minimum of the three. The output prints the whole table for depot and depart. The bottom-right cell is two: replace the O with an A, and insert an R. The second example is the longest common subsequence: the longest sequence of letters that appears in both strings in order, though not necessarily together. The state L of i and j is the length of the longest subsequence common to the two prefixes. When the last letters are equal, it extends the diagonal by one. Otherwise, it takes the better of dropping a letter from either string. Depot and depart share D, E, P, T, of length four, and reconstruction walks back through the table just as in the previous section. Both tables have about n times m cells with constant work each, so both run in time and space proportional to n times m.",
}
