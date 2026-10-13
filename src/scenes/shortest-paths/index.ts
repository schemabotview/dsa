import type { Scene } from '@graphlearning/flow'
import { relaxation } from './relaxation'
import { dagPaths } from './dag-paths'
import { dijkstra } from './dijkstra'
import { bellmanFord } from './bellman-ford'
import { floyd } from './floyd'
import { spanning } from './spanning'
import { unionFind } from './union-find'
import { kruskalPrim } from './kruskal-prim'

// Chapter 10 — Shortest Paths and Spanning Networks. One scene per section, in section order.
export const shortestPathsScenes: Scene[] = [relaxation, dagPaths, dijkstra, bellmanFord, floyd, spanning, unionFind, kruskalPrim]
