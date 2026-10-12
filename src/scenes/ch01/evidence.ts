import type { Scene } from '@graphlearning/flow'

// §1.6 — what each kind of evidence reaches. Tests cover the inputs they name; an invariant proof
// covers every input satisfying the precondition; one counterexample refutes a universal claim.
export const evidence: Scene = {
  id: 'evidence',
  title: 'What each kind of evidence reaches',
  flow: 'LR',
  nodes: [
    {
      id: 'kinds',
      label: 'Evidence',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'tests', label: 'Six tests pass', sub: 'empty, first, last, miss, …', pattern: 'network', icon: 'circlecheck' },
        { id: 'proof', label: 'Invariant proof', sub: 'init, maintenance, exit', pattern: 'service', icon: 'shieldcheck' },
        { id: 'cex', label: 'One failure', sub: 'P-317 returns None', pattern: 'warn', icon: 'bug' },
      ],
    },
    {
      id: 'reach',
      label: 'Establishes',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'covered', label: 'Those six', sub: 'nothing about the rest', pattern: 'storage', icon: 'boxes' },
        { id: 'all', label: 'Every valid input', sub: 'under the stated precondition', pattern: 'external', icon: 'globe' },
        { id: 'refuted', label: 'Claim is false', sub: 'no test count undoes it', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [
    { source: 'tests', target: 'covered' },
    { source: 'proof', target: 'all' },
    { source: 'cex', target: 'refuted' },
  ],
}
