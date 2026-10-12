import type { Section } from '../types'

export const shallowAndDeepCopies: Section = {
  id: 'shallow-and-deep-copies',
  title: 'Shallow and deep copies',
  scene: 'copies',
  focus: 'p-shared',
  slide: `## Shallow and deep copies

Copying a list is not the same as copying what it contains.

### Two kinds of copy
- \`today.copy()\` is **shallow**: a new list holding the same parcel objects
- \`copy.deepcopy(today)\` is **deep**: new parcel objects too
- The output: appending to \`shallow\` leaves \`today\` at length 1

### The trap
- Editing a shared parcel shows through **every** shallow copy
- Only the deep copy keeps \`North\`

### Cost
- A shallow copy of \`n\` items is linear work; a deep copy also copies every object reached
- Slicing with \`[:]\` and \`copy.copy\` are shallow too`,
  narration:
    "If assignment never copies, how do you get an independent list? Python offers two kinds of copy, and the difference between them catches people out. A shallow copy, made here with the copy method, builds a new list, but fills it with references to the same parcel objects. A deep copy, made with copy dot deepcopy, builds a new list and new parcel objects as well. The output shows both effects. Appending to the shallow copy leaves the original at length one, because the two lists really are separate. But changing the original parcel's depot to South shows up through the shallow copy too, since both lists hold the very same parcel. Only the deep copy still says North. So a shallow copy protects the list's structure, which items and in what order, but not the objects inside it. Copying also has a cost that is easy to overlook. A shallow copy of n items is linear work, not a free operation. A deep copy also copies every object it can reach, which can be far more. The next chapter counts costs like these explicitly. Slicing a whole list, and the copy function from the copy module, are shallow copies as well.",
}
