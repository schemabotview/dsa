import type { Section } from '../types'

export const namesAndReferences: Section = {
  id: 'names-and-references',
  title: 'Names and references',
  scene: 'aliasing',
  focus: 'list',
  slide: `## Names and references

In Python a variable is a **name** that refers to an object. Assignment never copies.

### Reading the example
- \`route = today\` makes a second name for the **same** list
- Appending through \`route\` changes what \`today\` sees: length 2
- \`route is today\` is \`True\` — one object, two names

### Why algorithms care
- A function that "only reads" a list can still be handed one that changes
- Our postcondition promised \`parcels\` is left unchanged — **aliasing** is how that breaks

### Identity versus value
- \`is\` compares **identity**; \`==\` compares value
- Two equal parcels can still be two different objects
- Passing a list to a function passes a reference, not a copy`,
  narration:
    "The last part of this chapter is about how Python represents data, because several later arguments depend on it. In Python a variable is a name, and a name refers to an object. Assigning one name to another never copies the object. It just gives the same object a second name. In the example, route equals today does not create a new list. It makes route refer to the same list that today refers to. So when a parcel is appended through route, today sees it too, and the length is two. The is operator confirms there is only one list. The same holds one level down. Changing the depot of the first parcel through today is visible through route, because both names lead to the same parcel object. This sharing is called aliasing. It matters for algorithms because a function can promise not to modify a list, as our postcondition did, while some other part of the program holding another name for that list modifies it anyway. Many surprising bugs are aliasing bugs in disguise. Keep two tests apart. The is operator compares identity, meaning whether two names lead to the very same object. The double equals operator compares value. Two parcels can be equal and still be two different objects. And passing a list to a function passes a reference to it, not a copy.",
}
