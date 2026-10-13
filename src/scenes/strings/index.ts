import type { Scene } from '@graphlearning/flow'
import { units } from './units'
import { trie } from './trie'
import { naive } from './naive'
import { kmp } from './kmp'
import { rolling } from './rolling'
import { suffixArray } from './suffix-array'
import { workload } from './workload'

// Chapter 13 — Strings and Prefix-Based Structures. One scene per section, in section order.
export const stringsScenes: Scene[] = [units, trie, naive, kmp, rolling, suffixArray, workload]
