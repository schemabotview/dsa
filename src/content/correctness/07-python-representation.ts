import type { Section } from '../types'

export const pythonRepresentation: Section = {
  id: 'python-representation',
  title: 'Python representation, aliasing, and arithmetic',
  scene: 'representation',
  focus: 'p-shared',
  slide: `## Representation and arithmetic

A name **refers** to an object. Assignment never copies.

### Aliasing and copies
- \`route = today\` is a second name for the **same** list
- \`today.copy()\` is **shallow**: a new list, the same parcels
- \`copy.deepcopy(today)\` copies the parcels too
- Editing a shared parcel shows through **every** shallow copy
- A shallow copy of \`n\` items is linear work, not free

### Arithmetic assumptions
- Integers are exact, so weights are stored in **grams**
- Floats round: ten \`+= 0.1\` steps give \`0.9999999999999999\`
- \`sum()\` compensates since CPython 3.12: an implementation detail
- \`//\` floors: \`-7 // 2\` is \`-4\`
- \`2 ** 200\` is exact, but cost grows with the digits`,
  narration:
    "The last part of this chapter is about how Python represents data, because several later arguments depend on it. In Python a variable is a name, and a name refers to an object. Assigning one name to another never copies anything. Writing route equals today just gives the same list a second name, so appending through route changes what today sees. This sharing is called aliasing, and it is how a function that promised to leave a list unchanged can still find it changed, by some other part of the program holding another name for it. To get an independent list you copy, and there are two kinds of copy. The script on the board makes both. A shallow copy, made with the copy method, builds a new list but fills it with references to the same parcel objects. A deep copy, made with copy dot deepcopy, builds new parcel objects as well. The output and the object graph show the difference. Appending to the shallow copy leaves the original at length one, because the two lists really are separate. But changing the original parcel's depot to South shows through the shallow copy, since both lists hold the very same parcel. Only the deep copy still says North. Copying also has a cost that is easy to miss. A shallow copy of n items is linear work, and a deep copy also copies everything it can reach. Numbers carry assumptions too. Integers are exact, which is why the planner stores weights in whole grams. Floating point numbers round, so adding nought point one to a total ten times gives a value just short of one. Since CPython three point one two the built-in sum function compensates for that rounding, but that is a detail of one implementation, so no algorithm should rely on it. The double slash operator floors towards minus infinity, so minus seven floor-divided by two is minus four. And Python integers have no fixed size. Two to the power two hundred is exact, but arithmetic on huge numbers is no longer a single step, which the next chapter makes precise.",
}
