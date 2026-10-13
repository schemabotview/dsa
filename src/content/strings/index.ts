import type { Course } from '../types'
import { units } from './01-units'
import { trie } from './02-trie'
import { naive } from './03-naive'
import { kmp } from './04-kmp'
import { rolling } from './05-rolling'
import { suffixArray } from './06-suffix-array'
import { workload } from './07-workload'

// Chapter 13 of DSA-COURSE-PLAN.md — one section per plan section, 13.1 to 13.7, in order.
export const strings: Course = {
  id: 'strings',
  title: 'Strings and Prefix-Based Structures',
  sections: [units, trie, naive, kmp, rolling, suffixArray, workload],
}
