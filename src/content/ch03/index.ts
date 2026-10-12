import type { Course } from '../types'
import { arrays } from './01-arrays'
import { dynamicArrays } from './02-dynamic-arrays'
import { singlyLinked } from './03-singly-linked'
import { doublyLinked } from './04-doubly-linked'
import { stacks } from './05-stacks'
import { queues } from './06-queues'
import { deques } from './07-deques'
import { tradeoffs } from './08-tradeoffs'

// Chapter 3 of DSA-COURSE-PLAN.md — one section per plan section, 3.1 to 3.8, in order.
export const ch03: Course = {
  id: 'ch03',
  title: 'Sequences, Links, Stacks, and Queues',
  sections: [arrays, dynamicArrays, singlyLinked, doublyLinked, stacks, queues, deques, tradeoffs],
}
