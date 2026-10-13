import type { Scene } from '@graphlearning/flow'
import { arrays } from './arrays'
import { dynamicArray } from './dynamic-array'
import { singlyLinked } from './singly-linked'
import { doublyLinked } from './doubly-linked'
import { stack } from './stack'
import { ringBuffer } from './ring-buffer'
import { deque } from './deque'
import { tradeoffs } from './tradeoffs'

// Chapter 3 — Sequences, Links, Stacks, and Queues. One scene per section, in section order.
export const sequencesScenes: Scene[] = [arrays, dynamicArray, singlyLinked, doublyLinked, stack, ringBuffer, deque, tradeoffs]
