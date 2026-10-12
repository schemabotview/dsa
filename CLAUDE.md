# CLAUDE.md — dsa

> The workspace-level `CLAUDE.md` (one level up, in `graphl-workspace`) holds the invariants that
> span every repo. This file is only what is true *here*.

## What this repo is

The **Data Structures & Algorithms** GraphL concept app, served at `graphl.in/dsa/`. The syllabus is
`DSA-COURSE-PLAN.md`: 14 chapters, 106 plan sections. **One chapter = one course** (`ch01` … `ch14`).
**One plan section = one on-screen section**, in plan order — the section count matches the plan
(7, 8, 8, 8, 7, 8, 7, 7, 8, 8, 6, 8, 7, 9). Frames are dense by design: the slide carries the key
points of the whole plan section, the narration carries the full explanation, and the scene combines
the plan's worked illustrations into one board.

A **section** is `(scene, slide, narration)` and is one segment of the course video. One section =
one slide. The render engine is `@graphlearning/flow`; the app shell is `@graphlearning/shell` — both
published packages pinned by version (`flow@^1.2.0`, `shell@^0.8.0`). This repo's own surface is
`src/content/`, `src/scenes/`, `examples/`, `src/main.tsx` and `src/theme.css` — nothing else.

## Route contract

`#/<course>-<section>`, e.g. `#/ch01-invariants-and-termination`. `#/` is the catalog. `?capture=1`
goes **before** the hash (`/?capture=1#/ch01-invariants-and-termination`) — after it, the shell reads it as part of
the slug and renders "no scene or slug".

## Course arc

| course | chapter | sections | status |
| --- | --- | --- | --- |
| `ch01` | Problems, Algorithms, and Correctness | 7 (plan 1.1–1.7) | authored, no audio yet |
| `ch02` | Analysing Time, Space, and Growth | 8 | authored, no audio yet |
| `ch03` | Sequences, Links, Stacks, and Queues | 8 | authored, no audio yet |
| `ch04` | Ordered Data, Searching, and Sorting | 8 | authored, no audio yet |
| `ch05` | Hashing, Sets, and Maps | 7 | authored, no audio yet |
| `ch06` | Trees and Ordered Indexes | 8 | authored, no audio yet |
| `ch07` | Heaps and Priority-Driven Processing | 7 | authored, no audio yet |
| `ch08`–`ch14` | see `DSA-COURSE-PLAN.md` | — | not started |

The running example is the **delivery planner**: `examples/ch01/planner.py` defines `Parcel(pid,
depot, weight)` and the four canonical parcels `P-104 / P-221 / P-317 / P-458`. Later chapters extend
this dataset rather than invent a new one, so frames stay consistent across the course.

## Examples are executed, not typed

Every code card that shows Python imports its file **verbatim** with vite `?raw`
(`import code from '../../../examples/ch01/find_parcel.py?raw'`), and every output card imports the
committed `.out` beside it. `npm run examples` re-runs each script under `python3.14` and fails if
stdout differs from its `.out`; `python3 examples/run.py --update` rewrites them. So:

- **Never type Python or its output into a scene.** Edit the `.py`, re-run, commit the `.out`.
- Output cards are labelled with the exact release they ran on (`output · CPython 3.14.6`). Bump the
  label if the interpreter changes.
- Keep example lines ≲ 60 chars — a code card's width follows its longest line, and a wide card
  shrinks the whole board.
- **Timing is the one exception.** It is not reproducible, so a timing script's output is recorded once
  as `<name>.measured` (never diffed by `run.py`) and its card is labelled `one recorded run`.
- `run.py` puts `examples/ch01` on `PYTHONPATH`, so every chapter can `from planner import …`.
- Version-dependent behaviour is called out where it is shown (e.g. `sum()` of floats is compensated
  since CPython 3.12, so `arithmetic.py` demonstrates rounding with an explicit `+=` loop).

## Narration style

Written for TTS, not the eye: no symbols (`≤`, `→`, `[0:i]`) — say them. Identifiers are spoken
("P three-seventeen"), operators are words ("double equals", "floor-divided"). Every point added to a
slide gets a sentence in the narration, so the two halves stay derived from one idea.

## Scene inventory — ch01

| scene | kind | section |
| --- | --- | --- |
| `problem-contract` | instances group → contract (list → leaf → list) → data table | 01 |
| `modelling` | leaf → model group → assumptions group | 02 |
| `baseline` | pseudocode → Python → output (code cards) | 03 |
| `execution` | code → output → two hand-traced data tables | 04 |
| `invariant` | memory with brackets → leaf → LR proof chain → leaf | 05 |
| `evidence` | code → (output + list card) | 06 |
| `representation` | code → output → object graph | 07 |

`examples/ch01/` also keeps `aliasing.py`, `boundary_cases.py` and `arithmetic.py`, which no card
shows: they back claims made on slides 06 and 07, and `npm run examples` keeps those claims true.

## Scene inventory — ch02

`cost-model` (group → code → output) · `counting` (code → output + rules table) · `bounds` (plot →
table) · `cases` (code → output → group) · `growth` (plot → output) · `recursion-tree` (call tree →
output) · `space`, `timing` (code → output). One per section, 01–08.

## Scene inventory — ch03

`arrays` (memory + leaf → code → output) · `dynamic-array`, `deque`, `tradeoffs` (… → code → output) · `singly-linked` (LR chain → code → output) · `doubly-linked` (LR ring → class file → demo output) · `stack`, `ring-buffer` (memory state → code → output). One per section, 01–08.

## Scene inventory — ch04

`keys` (code → output → table) · `binary-search`, `quicksort` (memory regions → code → output) · `simple-sorts`, `merge-sort`, `counting-radix`, `quickselect` (code → output) · `decision-tree` (comparison tree → row of lower-bound output and two-pointer code/output). One per section, 01–08.

## Scene inventory — ch05

`contracts`, `applications` (code → output) · `hash-function` (LR pipeline → code → output) · `chaining`, `probing` (memory state → code → output) · `resizing` (load-factor plot → class → output) · `adversarial` (code → output → defences group). One per section, 01–07. Examples use their own deterministic hash `hashing.h`: Python's `str` hash is randomised per process, so it cannot back a checked `.out`.

## Scene inventory — ch06

`tree-anatomy`, `augmented` (7-node depot tree → code → output) · `traversals` (stack memory → code → output) · `bst-search` (module → demo output → property group) · `bst-delete` (cases group → code → output) · `skew` (chain beside balanced tree → code → output) · `avl` (before/after rotation → code → output) · `btree` (B-tree → cost-model table → output). One per section, 01–08.

## Scene inventory — ch07

`pq-contract` (ops group → code → output) · `heap-layout` (tree beside array → code → output) · `sift`, `topk` (code → output) · `build-heap` (work-by-height table → code → output) · `heapsort`, `lazy` (code → output → comparison table). One per section, 01–07.

## Layout lessons from ch01

- **Prefer `flow: 'TB'`.** Every LR board of two or more wide nodes (memory, table, code) rendered at
  a third of the pane's height. Five-step pipelines go in two LR rows nested in TB groups
  (`constraint-objective`).
- A long formula in an inline-code chip wraps mid-formula on the slide. Write formulas as plain or
  bold text and keep chips for short identifiers.
- `focus` and node ids must be written as literal `id: '…'` — `check` cannot see ids built by a
  helper function.
- **Never draw a cycle** (an edge back to an earlier node in the same LR/TB chain): the layout
  routes it through other nodes. Say it in a `sub` instead (`next is the sentinel`).
- Code cards above ~30 lines shrink the whole board. Split a long example into a class file (shown)
  and a demo file (its output shown), as `dlist.py` / `doubly_linked.py` do.
- Plot `label`s need `labelAt` as soon as two series end near the same corner.
- **Keep the slide `##` to one line (≲ 30 chars).** `check` models the heading as a single line, so a
  wrapped heading adds ~50px it cannot see. `Section.title` (the catalog) can stay the full plan title.
- `@graphlearning/flow` 1.3.0 logs a React "unique key" warning for every **data** table (its cell
  renderer omits keys). Dev-only and harmless; it is an engine bug, not a content error.

## Invariants — do not break

- **Never write `x` or `y`.** Scenes are declarative: nodes, edges, nesting. `computeLayout` is not
  exported, so there is no way around this, and that is the point — reproducible frames.
- **Do not reimplement the shell.** `SectionView`, `CourseIndex`, `SlidePanel` and the hooks are
  withheld on purpose. The route contract (`#/<courseId>-<sectionId>`, `?capture=1`,
  `window.__scene.plan()`) is what every recorder drives, and it holds only if every repo composes
  the pieces identically.
- **`SiteHeader` goes on the catalog page only** — never on a section. A section is a video frame.
- **Three stylesheets, in cascade order**, imported in `main.tsx`. The order is load-bearing:
  1. `@graphlearning/flow/styles.css` — react-flow plus the IBM Plex faces the engine is
     *calibrated* to. `codeMetrics` sizes code nodes from a measured 9.02px glyph advance, so a
     different monospace face mis-sizes every code card. Carries the `.tok-*` colours.
  2. `@graphlearning/shell/styles.css` — the shell paints the canvas (`--bg: #1a1d23`; SceneView
     draws its dots at `#2a2f38` assuming a dark surface).
  3. `./theme.css` — this repo's three brand tokens. **Last, or the brand loses to the defaults.**
- **`file:../ui-flow` / `file:../ui-shell` must never be committed.** Local engine work only; CI has
  no sibling checkout.
- **Narration is never hand-produced.** `.tts` → `.wav` via Colab + Chatterbox only.

## Layout rules the frames actually care about

`npm run check` (`scripts/check-content.mjs`) models four silent failures — each builds green and
breaks only on screen. Its comments carry the measured constants; the short version:

- **Leaf cards are a fixed 210×96** with a ~134px text column. Only containers grow to fit. Keep the
  `label` to 2 wrapped lines; 2 label lines + 2 sub lines fits. Watch unbreakable tokens — `_`, `.`
  and `/` are **not** break opportunities in CSS, so `snake_case` and paths overflow sideways in a
  way the height model cannot see.
- **Slides do not scale to fit.** Type size is fixed by the frame (`zoom = paneWidth / 806`,
  width-proportional only), so an over-long slide **clips at the bottom** with no error.
  `check` fails over 1000 modelled design px; the band below gives the floor too. Bullets cost far
  more than prose of the same length.
- **A `focus:` that names no node in its scene is a silent no-op** — nothing lights up.
- **`icon:` names are NOT guarded.** The engine's lucide registry is `Record<string, LucideIcon>`
  and does not enumerate its keys, so a wrong name type-checks, passes `check`, builds, and renders
  a card with no glyph. There are ~75 valid keys; copy one off an existing scene rather than
  guessing a lucide name (`volume`, `move`, `maximize` and `git` are all absent, for instance).
- **A section with no wav narrates silence** and records a silent segment. Audio resolves purely by
  convention: `public/audio/<course>/<section-id>.wav`.

What `check` does *not* model: an edge label landing on top of a card, or whether the frame is too
empty. Look at the route.

### Density targets — the frame must use the space it has

The guarded failure is a slide that overflows. The unguarded one is its opposite: a frame that
builds green, reads correctly, and leaves half its pane empty. Against the ~1080 design px pane:

| | target | why |
| --- | --- | --- |
| slide height | **80–95 %** of the pane (≈ 865–1025px; `SLIDE_H_MAX` caps the top at 1000) | below 80 % the right half looks empty; above ~95 % it risks clipping |
| scene, binding axis | ≥ 0.85 of the pane | the board should reach the edge it is limited by |
| scene, area | ≥ 0.55 of the pane (w × h) | a wide board that fills the width but a third of the height wastes the pane |
| eyebrow | no node under the top-left eyebrow label | boards that bind on height run up to y≈30 |

Levers: **add real content, not padding**; **restack** a board toward the pane's ~1:1 aspect; lower
scene `padding` to 0.04 for boards that float, **raise** it (0.12–0.17) for tall boards that touch
the eyebrow.

These are read off the rendered route by eye — `check` models no density at all. The two ratios come
from one repo's ~80 frames of diagram-and-code-card boards, so a deliberately sparse board can sit
under them. Targets, not thresholds.

## Guards before handing over

```sh
npm run build && npx tsc --noEmit && npm run check
```

All three are a **floor, not proof** — they pass on frames that are visually wrong. The rendered
route is the real bar, and the owner reviews it.

## Working agreement

- **Author the whole unit, then hand over the route.** Scenes, slides and narration together.
- **No ASCII sketches of scenes.** A sketch cannot show what the layout engine will do, which is the
  only thing worth looking at.
- **No silent scaffolding**, no work outside the ask. Say plainly what was built, what was verified,
  and what was left out.
