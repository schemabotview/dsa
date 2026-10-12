import type { Scene } from '@graphlearning/flow'

// §1.2 — each assumption beside what goes wrong without it. Label = the assumption, sub = the
// failure it rules out, so the board reads as a checklist of conditions on the correctness claim.
export const assumptions: Scene = {
  id: 'assumptions',
  title: 'Stated assumptions',
  flow: 'TB',
  nodes: [
    {
      id: 'assume',
      label: 'Assumed — and why it matters',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'exact', label: 'Exact match', sub: '"p-317 " is a miss, not a typo fix', pattern: 'service', icon: 'search' },
        { id: 'finite', label: 'Finite list', sub: 'otherwise "absent" is never known', pattern: 'storage', icon: 'boxes' },
        { id: 'frozen', label: 'No edits mid-search', sub: 'an index can go stale', pattern: 'warn', icon: 'lock' },
        { id: 'cheap', label: 'Cheap compare', sub: 'short pids, one step per check', pattern: 'network', icon: 'gauge' },
        { id: 'records', label: 'Well-formed', sub: 'every record has a pid', pattern: 'user', icon: 'shieldcheck' },
        { id: 'memory', label: 'Fits in memory', sub: 'no disk or network reads', pattern: 'external', icon: 'memory' },
      ],
    },
  ],
  edges: [],
}
