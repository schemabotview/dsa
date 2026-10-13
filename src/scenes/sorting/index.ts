import type { Scene } from '@graphlearning/flow'
import { keys } from './keys'
import { binarySearch } from './binary-search'
import { simpleSorts } from './simple-sorts'
import { mergeSort } from './merge-sort'
import { quicksort } from './quicksort'
import { countingRadix } from './counting-radix'
import { quickselect } from './quickselect'
import { decisionTree } from './decision-tree'

// Chapter 4 — Ordered Data, Searching, and Sorting. One scene per section, in section order.
export const sortingScenes: Scene[] = [keys, binarySearch, simpleSorts, mergeSort, quicksort, countingRadix, quickselect, decisionTree]
