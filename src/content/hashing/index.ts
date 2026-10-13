import type { Course } from '../types'
import { contracts } from './01-contracts'
import { hashFunctions } from './02-hash-functions'
import { chaining } from './03-chaining'
import { openAddressing } from './04-open-addressing'
import { loadFactor } from './05-load-factor'
import { expectedCost } from './06-expected-cost'
import { applications } from './07-applications'

// Chapter 5 of DSA-COURSE-PLAN.md — one section per plan section, 5.1 to 5.7, in order.
export const hashing: Course = {
  id: 'hashing',
  title: 'Hashing, Sets, and Maps',
  sections: [contracts, hashFunctions, chaining, openAddressing, loadFactor, expectedCost, applications],
}
