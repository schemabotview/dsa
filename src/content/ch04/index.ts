import type { Course } from '../types'
import { keys } from './01-keys'
import { binarySearch } from './02-binary-search'
import { simpleSorts } from './03-simple-sorts'
import { mergeSort } from './04-merge-sort'
import { quicksort } from './05-quicksort'
import { countingRadix } from './06-counting-radix'
import { selection } from './07-selection'
import { lowerBound } from './08-lower-bound'

// Chapter 4 of DSA-COURSE-PLAN.md — one section per plan section, 4.1 to 4.8, in order.
export const ch04: Course = {
  id: 'ch04',
  title: 'Ordered Data, Searching, and Sorting',
  sections: [keys, binarySearch, simpleSorts, mergeSort, quicksort, countingRadix, selection, lowerBound],
}
