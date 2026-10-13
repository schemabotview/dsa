import type { Scene } from '@graphlearning/flow'
import { greedyChoice } from './greedy-choice'
import { exchange } from './exchange'
import { intervals } from './intervals'
import { huffman } from './huffman'
import { weightedFail } from './weighted-fail'
import { graphGreedy } from './graph-greedy'

// Chapter 11 — Greedy Design and Exchange Reasoning. One scene per section, in section order.
export const greedyScenes: Scene[] = [greedyChoice, exchange, intervals, huffman, weightedFail, graphGreedy]
