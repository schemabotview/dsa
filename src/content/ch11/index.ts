import type { Course } from '../types'
import { greedyChoices } from './01-greedy-choices'
import { exchange } from './02-exchange'
import { intervals } from './03-intervals'
import { huffman } from './04-huffman'
import { counterexamples } from './05-counterexamples'
import { graphGreedy } from './06-graph-greedy'

// Chapter 11 of DSA-COURSE-PLAN.md — one section per plan section, 11.1 to 11.6, in order.
export const ch11: Course = {
  id: 'ch11',
  title: 'Greedy Design and Exchange Reasoning',
  sections: [greedyChoices, exchange, intervals, huffman, counterexamples, graphGreedy],
}
