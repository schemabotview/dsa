import type { Scene } from '@graphlearning/flow'

// §14.8 — what this course covered in depth, and the specialist directions it deliberately leaves to
// other courses, as two groups.
export const boundaries: Scene = {
  id: 'boundaries',
  title: 'Scope and specialist directions',
  flow: 'TB',
  nodes: [
    {
      id: 'covered',
      label: 'Covered here, as foundations',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'c-structs', label: 'Structures', sub: 'lists, hashes, trees, heaps', pattern: 'storage', icon: 'database' },
        { id: 'c-search', label: 'Search', sub: 'sort, search, backtracking', pattern: 'network', icon: 'search' },
        { id: 'c-graphs', label: 'Graphs', sub: 'traversal, paths, MSTs', pattern: 'network', icon: 'network' },
        { id: 'c-design', label: 'Design', sub: 'greedy, DP, strings', pattern: 'service', icon: 'workflow' },
        { id: 'c-proof', label: 'Reasoning', sub: 'invariants, bounds, cases', pattern: 'service', icon: 'shieldcheck' },
        { id: 'c-limits', label: 'Limits', sub: 'reductions, NP, approximation', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'beyond',
      label: 'Beyond this course: separate depth needed',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'b-flow', label: 'Network flow', sub: 'matching, cuts', pattern: 'external', icon: 'waves' },
        { id: 'b-geo', label: 'Geometry', sub: 'hulls, intersections', pattern: 'external', icon: 'ruler' },
        { id: 'b-num', label: 'Numerical', sub: 'FFT, floating point', pattern: 'external', icon: 'sigma' },
        { id: 'b-crypto', label: 'Cryptography', sub: 'number theory', pattern: 'external', icon: 'key' },
        { id: 'b-par', label: 'Parallel', sub: 'and distributed', pattern: 'external', icon: 'cpu' },
        { id: 'b-pers', label: 'Persistent', sub: 'and succinct structures', pattern: 'external', icon: 'history' },
      ],
    },
  ],
  edges: [{ source: 'covered', target: 'beyond', label: 'next steps' }],
}
