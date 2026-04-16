# DSA Learning Content Repo

## Role
You are a Data Structures & Algorithms expert and content creator. This repo contains educational content covering DSA concepts, targeting developers who want to build strong problem-solving fundamentals and prepare for technical interviews.

## Local Setup Requirements

To run notebooks locally, install these Python packages:

```bash
pip install jupyter notebook
```

## Repo Structure

- `*.ipynb` — Jupyter notebooks, one per DSA topic. Each notebook contains:
  - **Markdown cells** — theory, explanations, diagrams (in text), definitions
  - **Code cells** — hands-on examples, Python implementations, or demos
- `tts/` — Plain-text `.tts` files, one per topic, used as TTS source scripts
- `audio/` — Pre-generated audio files (`.wav`) for each topic, generated from `.tts` files using ChatterboxTTS on Colab GPU

## Notebook Conventions

- Filename: `01-arrays-and-strings.ipynb`, `02-linked-lists.ipynb` — leading numbers control sort order
- Each notebook covers a single topic
- First cell must be a markdown cell that introduces the topic
- Use markdown cells for explanations and theory, code cells for runnable examples
- Outputs (stdout, etc.) can be included — the viewer renders them
- Notebook filenames use kebab-case and are the single source of truth for naming — `.tts` and `.wav` files use the exact same stem (e.g., `01-arrays-and-strings.ipynb` → `tts/01-arrays-and-strings.tts` → `audio/01-arrays-and-strings.wav`)

## Dual-Language Code Convention

Every code example is shown in **two languages: Python first, then Kotlin**. Never side-by-side (Jupyter is top-to-bottom); always sequential with a clear label.

```markdown
### Python
```python
def binary_search(arr, target):
    ...
```

### Kotlin
```kotlin
fun binarySearch(arr: List<Int>, target: Int): Int {
    ...
}
```
```

**Why Python + Kotlin:**
- Python — dynamic, terse, pseudocode-like; the LeetCode default; covers scripting/data/ML audience
- Kotlin — statically typed, compiled, modern JVM; instantly readable by Java/Scala/Android devs
- The contrast (dynamic vs static, implicit vs explicit types) reinforces how data structures work at the type level
- JS is intentionally excluded — it's dynamically typed like Python, so it adds no new perspective

## Audio Generation

Audio is generated locally using ChatterboxTTS in the `chatterbox` conda environment.

```bash
# Generate audio for a single .tts file
conda activate chatterbox && python scripts/generate_audio.py tts/01-arrays-and-strings.tts

# Regenerate even if .wav already exists
conda activate chatterbox && python scripts/generate_audio.py tts/01-arrays-and-strings.tts --force
```

Steps:
1. Write/update the `.tts` file in `tts/`
2. Run the command above (swap the filename for the topic you want)
3. The `.wav` is saved to `audio/` with the same stem name
4. Commit and push the generated `.wav`

## Topics Covered

| # | Topic | Notebook | Audio |
|---|---|---|---|
| 01 | How Computers Store Data | `01-how-computers-store-data.ipynb` | `01-how-computers-store-data.wav` |
| 02 | Complexity Analysis | `02-complexity-analysis.ipynb` | `02-complexity-analysis.wav` |
| 03 | Primitive Types & Memory | `03-primitive-types-and-memory.ipynb` | `03-primitive-types-and-memory.wav` |
| 04 | Arrays & Strings | `04-arrays-and-strings.ipynb` | `04-arrays-and-strings.wav` |
| 05 | Linked Lists | `05-linked-lists.ipynb` | `05-linked-lists.wav` |
| 06 | Stacks & Queues | `06-stacks-and-queues.ipynb` | `06-stacks-and-queues.wav` |
| 07 | Hash Maps & Hash Sets | `07-hashmaps-and-hashsets.ipynb` | `07-hashmaps-and-hashsets.wav` |
| 08 | Recursion & the Call Stack | `08-recursion-and-the-call-stack.ipynb` | `08-recursion-and-the-call-stack.wav` |
| 09 | Trees & Binary Trees | `09-trees-and-binary-trees.ipynb` | `09-trees-and-binary-trees.wav` |
| 10 | Binary Search Trees | `10-binary-search-trees.ipynb` | `10-binary-search-trees.wav` |
| 11 | Heaps & Priority Queues | `11-heaps-and-priority-queues.ipynb` | `11-heaps-and-priority-queues.wav` |
| 12 | Tries | `12-tries.ipynb` | `12-tries.wav` |
| 13 | Graph Representation | `13-graph-representation.ipynb` | `13-graph-representation.wav` |
| 14 | BFS & DFS | `14-bfs-and-dfs.ipynb` | `14-bfs-and-dfs.wav` |
| 15 | Graph Algorithms | `15-graph-algorithms.ipynb` | `15-graph-algorithms.wav` |
| 16 | Binary Search | `16-binary-search.ipynb` | `16-binary-search.wav` |
| 17 | Sorting Algorithms | `17-sorting-algorithms.ipynb` | `17-sorting-algorithms.wav` |
| 18 | Two Pointers & Sliding Window | `18-two-pointers-and-sliding-window.ipynb` | `18-two-pointers-and-sliding-window.wav` |
| 19 | Backtracking | `19-backtracking.ipynb` | `19-backtracking.wav` |
| 20 | Dynamic Programming — Fundamentals | `20-dynamic-programming-fundamentals.ipynb` | `20-dynamic-programming-fundamentals.wav` |
| 21 | Dynamic Programming — Patterns | `21-dynamic-programming-patterns.ipynb` | `21-dynamic-programming-patterns.wav` |
| 22 | Greedy Algorithms | `22-greedy-algorithms.ipynb` | `22-greedy-algorithms.wav` |
| 23 | Bit Manipulation | `23-bit-manipulation.ipynb` | `23-bit-manipulation.wav` |
| 24 | Interview Patterns & Problem-Solving Framework | `24-interview-patterns.ipynb` | `24-interview-patterns.wav` |

## Content Guidelines

- Write theory in clear, beginner-friendly language
- Use real-world analogies to explain DSA concepts
- Keep code examples practical and minimal — demonstrate the concept, not the full API
- Use Python 3.10+ and Kotlin 1.9+ syntax throughout
- Every code example must appear in both Python and Kotlin (Python first, then Kotlin), each under a `### Python` / `### Kotlin` heading
- Each notebook should be self-contained and readable top-to-bottom
- Include time and space complexity analysis for every algorithm
- Use SVG diagrams wherever a visual aids understanding more than prose — good candidates: memory layouts, pointer/node chains, tree structures, graph traversals, sliding window movement, DP tables. Save SVGs to `img/` and reference them in markdown cells via GitHub raw URL: `![Alt text](https://raw.githubusercontent.com/schemabotview/dsa/main/img/filename.svg)`
- `.tts` files should be plain prose (no markdown, no code) — they are read aloud by TTS
