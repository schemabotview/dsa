import type { Scene } from '@graphlearning/flow'
import { pqContract } from './pq-contract'
import { heapLayout } from './heap-layout'
import { sift } from './sift'
import { buildHeap } from './build-heap'
import { heapsort } from './heapsort'
import { topk } from './topk'
import { lazy } from './lazy'

// Chapter 7 — Heaps and Priority-Driven Processing. One scene per section, in section order.
export const ch07Scenes: Scene[] = [pqContract, heapLayout, sift, buildHeap, heapsort, topk, lazy]
