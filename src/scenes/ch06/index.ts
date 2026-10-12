import type { Scene } from '@graphlearning/flow'
import { treeAnatomy } from './tree-anatomy'
import { traversals } from './traversals'
import { bstSearch } from './bst-search'
import { bstDelete } from './bst-delete'
import { skew } from './skew'
import { avl } from './avl'
import { augmented } from './augmented'
import { btree } from './btree'

// Chapter 6 — Trees and Ordered Indexes. One scene per section, in section order.
export const ch06Scenes: Scene[] = [treeAnatomy, traversals, bstSearch, bstDelete, skew, avl, augmented, btree]
