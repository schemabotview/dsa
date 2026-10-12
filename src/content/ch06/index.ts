import type { Course } from '../types'
import { treeVocabulary } from './01-tree-vocabulary'
import { traversals } from './02-traversals'
import { bstSearch } from './03-bst-search'
import { bstDelete } from './04-bst-delete'
import { height } from './05-height'
import { avl } from './06-avl'
import { augmentation } from './07-augmentation'
import { btrees } from './08-btrees'

// Chapter 6 of DSA-COURSE-PLAN.md — one section per plan section, 6.1 to 6.8, in order.
export const ch06: Course = {
  id: 'ch06',
  title: 'Trees and Ordered Indexes',
  sections: [treeVocabulary, traversals, bstSearch, bstDelete, height, avl, augmentation, btrees],
}
