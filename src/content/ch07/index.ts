import type { Course } from '../types'
import { contracts } from './01-contracts'
import { heapLayout } from './02-heap-layout'
import { sift } from './03-sift'
import { buildHeap } from './04-build-heap'
import { heapsort } from './05-heapsort'
import { applications } from './06-applications'
import { changingPriorities } from './07-changing-priorities'

// Chapter 7 of DSA-COURSE-PLAN.md — one section per plan section, 7.1 to 7.7, in order.
export const ch07: Course = {
  id: 'ch07',
  title: 'Heaps and Priority-Driven Processing',
  sections: [contracts, heapLayout, sift, buildHeap, heapsort, applications, changingPriorities],
}
