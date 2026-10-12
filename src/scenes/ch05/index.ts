import type { Scene } from '@graphlearning/flow'
import { contracts } from './contracts'
import { hashFunction } from './hash-function'
import { chaining } from './chaining'
import { probing } from './probing'
import { resizing } from './resizing'
import { adversarial } from './adversarial'
import { applications } from './applications'

// Chapter 5 — Hashing, Sets, and Maps. One scene per section, in section order.
export const ch05Scenes: Scene[] = [contracts, hashFunction, chaining, probing, resizing, adversarial, applications]
