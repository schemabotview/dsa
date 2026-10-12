# dsa — Data Structures & Algorithms

The **Data Structures & Algorithms** GraphL concept app, served at `graphl.in/dsa/`. The syllabus is
[`DSA-COURSE-PLAN.md`](DSA-COURSE-PLAN.md): 14 chapters, each authored as one course with one on-screen
section per plan section. Scaffolded from `schemabotview/content-repo-template`.

| course | chapter | status |
| --- | --- | --- |
| `ch01` | Problems, Algorithms, and Correctness — 7 sections | authored; narration audio not generated yet |
| `ch02`–`ch14` | see the plan | being authored, one commit per chapter |

```sh
npm install
npm run dev          # http://localhost:5173 — e.g. #/ch01-invariants-and-termination
```

## The content model

- **concept ⊃ course ⊃ section.** A **section** is `(scene, slide, narration)` — one slide, one
  segment of the course video.
- **Left = scene, right = slide.** The scene is a react-flow diagram, a code card, a table, a memory
  layout or a plot, all rendered by `@graphlearning/flow`. The slide is markdown.
- **Scenes are declarative.** Never write x or y — the engine computes every position and size.
- **Python on screen is executed.** Code and output cards import `examples/<course>/*.py` and their
  committed `.out` files verbatim; `npm run examples` re-runs them under Python 3.14 and diffs.
- Narration wavs come from a Colab + Chatterbox pass (`scripts/colab_generate_audio.ipynb`), never by
  hand, into `public/audio/<course>/<section-id>.wav`.

## What is in here

```
DSA-COURSE-PLAN.md   the syllabus
src/content/         courses → sections (one file per section) + registry
src/scenes/          scenes, one file each, grouped by course + registry
examples/            runnable Python behind every code card · run.py checks their output
src/main.tsx         mounts <ConceptApp> from @graphlearning/shell
src/theme.css        --brand / --brand-hover / --accent-2
scripts/             check-content.mjs · colab notebook · concept.json · titles.json
public/audio/<course>/    narration wavs
.github/workflows/deploy.yml    Pages deploy on push to main
```

## Verifying a change

```sh
npm run build        # must be clean
npx tsc --noEmit     # must be clean
npm run check        # card overflow, slide clipping, dead focus, missing wavs
npm run examples     # every example's output still matches what the cards show
```

…and **the section looked at in the browser**. These pass on frames that are visually wrong; the
rendered route is the real bar.
