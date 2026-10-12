# Data Structures and Algorithms — From Correct Solutions to Justified Choices

## Audience and prerequisites

For learners new to DSA who can read and write basic Python functions, loops, lists, classes, and reference-based code. The companion [Python plan](PYTHON-COURSE-PLAN.md) supplies these foundations; advanced Python is not required. Introduce sets, logic, logarithms, sums, induction, graphs, and elementary probability where needed. Local mathematical introductions support the examples without replacing a complete discrete-mathematics course.

Scope: problem specification, correctness, analysis, common structures, searching/sorting, recursive search, graphs, greedy design, dynamic programming, strings, and computational limits. Use Python as the primary example language, supported by language-neutral pseudocode. Explain representative implementations before comparing library equivalents. Annotated code, expected output, diagrams, counts, proof arguments, tables, and counterexamples connect ideas to application. Following examples is optional; no submitted exercises or learner monitoring are required. This is a general academic course independent of interviews and certifications.

Reference baseline: **Python 3.14**, with sources checked on **2026-10-12**. Record the implementation and exact release for detailed lessons. Separate language/library guarantees from CPython implementation and the abstract cost model. A short Python expression can hide linear work; slicing, copying, hashing, comparison, allocation, recursion, and arbitrary-size arithmetic need explicit accounting. No version-specific feature is essential to the mathematical spine.

Target: formulate computational problems, construct and explain representative structures/algorithms, justify correctness and costs under stated assumptions, compare alternatives, and recognise limits of efficient exact solutions. Course completion does not establish assessed practical mastery.

Structure: **14 chapters, 106 sections**, distributed **7, 8, 8, 8, 7, 8, 7, 7, 8, 8, 6, 8, 7, and 9**. Natural learning milestones determine chapter boundaries; counts do not imply equal teaching duration.

## Learning spine

Specify a problem and correct baseline → explain its cost → organise sequential data → exploit order → index by keys → maintain ordered hierarchies → prioritise work → explore choices recursively → model relationships as graphs → optimise graph decisions → justify local choices → reuse overlapping subproblems → search text structurally → select approaches under computational and engineering limits.

Recurring example: a small delivery planner begins with a parcel list and depot records, then develops identifier lookup, ordered reports, urgency queues, route/dependency graphs, scheduling choices, and capacity decisions. It provides continuity rather than claiming to solve realistic logistics in full. Use classical small examples and text cases when they expose a principle more clearly.

Teaching method: objective → problem/contract → correct baseline → representation and annotated execution → invariant or proof sketch → time/space analysis → contrasting failure/trade-off → outcome → bridge. State where correctness is conditional on valid input. Demonstrated tests supply evidence for covered cases, while proof arguments explain broader claims. Introduce failure reasoning and resource limits alongside each technique.

Progression rationale: simple computations motivate analysis before advanced notation. Sequential structures precede hierarchies and graphs; order motivates binary search and divide-and-conquer. Introduce recursion locally in sorting and trees, then generalise it to backtracking. Graph optimisation follows traversal and priority structures. Greedy counterexamples motivate richer state and dynamic programming. Computational limits synthesise the choices already encountered.

## Chapter 1 — Problems, Algorithms, and Correctness

Objective: Turn an informal task into a precise problem and explain why a baseline solution meets its contract.

1. Inputs, outputs, preconditions, postconditions, and problem instances
2. Modelling, constraints, objectives, and assumptions
3. Baseline solutions and readable pseudocode
4. Program state and step-by-step execution
5. Loop invariants, induction, and termination
6. Counterexamples, boundary cases, and testing evidence
7. Python representation, aliasing, and arithmetic assumptions

Worked illustrations: Find a parcel by identifier in a short list; specify missing/duplicate-ID behaviour before choosing an implementation. Trace an empty input and the final position. State what a loop has established about the inspected prefix and why it terminates. Contrast a single failing counterexample with many passing tests. Explain shared references and avoid treating a copy of a list as a deep copy of its objects.

Outcome: Specify a small problem, trace a baseline, and explain its correctness and assumptions.

Bridge: A correct answer is the starting point; next we explain how its resource needs grow.

## Chapter 2 — Analysing Time, Space, and Growth

Objective: Derive and interpret resource bounds under an explicit model of computation.

1. Input size, encoded size, primitive operations, and cost models
2. Counting operations in sequential and nested computations
3. O, Omega, and Theta: bounds versus case selection
4. Worst-case, average-case, and expected analysis
5. Logarithms, summations, and common growth rates
6. Recursion, recurrences, and recursion-tree reasoning
7. Auxiliary space, output space, and call-stack depth
8. Empirical evidence, constants, and limits of abstraction

Worked illustrations: Compare linear lookup and all-pairs comparison, counting work before assigning notation. Distinguish a worst-case bound from an expected bound over randomness or an input distribution. Draw a halving recursion and a branching recursion. Compare index-based processing with slicing that allocates copies. Explain when large integers, long keys, or expensive comparisons invalidate a unit-cost assumption. Timing results complement analysis without proving an asymptotic claim.

Outcome: Explain a bound's model and case, derive simple time/space costs, and identify hidden work.

Bridge: Representations determine which operations are cheap; next we examine sequential containers.

## Chapter 3 — Sequences, Links, Stacks, and Queues

Objective: Connect sequential-container contracts to representation, invariants, and operation costs.

1. Arrays, indexed access, layout models, and Python lists
2. Dynamic arrays, geometric resizing, and amortised analysis
3. Singly linked lists and locating versus changing a node
4. Doubly linked lists, sentinels, and structural invariants
5. Stacks and last-in-first-out applications
6. Queues, circular buffers, and capacity management
7. Deques and operations at both ends
8. Aliasing, mutation, locality, and representation trade-offs

Worked illustrations: Trace array growth and total copying over many appends; distinguish amortised cost from expected cost. Draw links before and after insertion/deletion, including empty and singleton structures. Compare a list queue using front removal with a ring buffer and `collections.deque`. Use balanced-delimiter checking as a stack case. Introduce prefix sums and a fixed-width rolling total as bounded sequence examples with explicit update assumptions. Teaching storage arrays and growth policies are illustrative models, not claims about Python's exact allocation policy.

Outcome: Explain container invariants, trace operations, and justify a sequential representation for a workload.

Bridge: Once order is meaningful, search and organisation can use it to reduce work.

## Chapter 4 — Ordered Data, Searching, and Sorting

Objective: Explain how ordering supports efficient search and how sorting choices depend on contracts and input assumptions.

1. Ordering, comparison keys, stability, and duplicates
2. Binary search, interval invariants, and boundary queries
3. Insertion sort and selection sort as contrasting baselines
4. Merge sort and divide-and-conquer
5. Quicksort, partition invariants, and randomisation
6. Counting/radix sorting and key-range assumptions
7. Selection, partition-based order statistics, and expected cost
8. Comparison lower bounds and choosing a search/sort strategy

Worked illustrations: Trace first/last insertion boundaries with duplicate keys; contrast `bisect` search cost with insertion's shifting cost. Annotate a merge and a partition, including already-sorted data. Contrast stable multi-key sorting with a stability-breaking implementation. Demonstrate two pointers on sorted data and explain why the same movement rule can fail without order. State the comparison-model assumptions behind sorting lower bounds; counting/radix methods use additional structure. Compare teaching algorithms with Python's stable sort without implying the built-in uses the illustrated quicksort.

Outcome: Explain search/sort correctness, analyse representative methods, and select a strategy under stated constraints.

Bridge: Equality lookup need not maintain a global ordering; next we index directly by keys.

## Chapter 5 — Hashing, Sets, and Maps

Objective: Explain hash-based lookup through key contracts, collision handling, and conditional cost claims.

1. Set/map contracts, equality, hashability, and key lifetime
2. Direct addressing, hash functions, and bucket selection
3. Separate chaining and collision resolution
4. Open addressing, probing, deletion, and tombstones
5. Load factors, resizing, and operation sequences
6. Expected cost, worst cases, randomness, and adversarial inputs
7. Frequency counting, deduplication, memo lookup, and library boundaries

Worked illustrations: Develop a parcel-ID index and trace several colliding keys through chaining and probing. Explain why deleting a probe entry as if it were never occupied can break lookup. Compare direct addressing with sparse-key storage. State load and hash-distribution assumptions behind expected lookup costs, including key hashing/comparison costs. Explain Python dict insertion order separately from sorted-key order, and hash equality separately from value equality. Use a frequency table and a bounded sliding-window case whose movement rule has justified preconditions; hashing is not encryption.

Outcome: Trace a hash-table operation, explain its contracts and cost assumptions, and choose hashing when order is unnecessary.

Bridge: Range queries and predecessor/successor operations need an ordered structure that changes dynamically.

## Chapter 6 — Trees and Ordered Indexes

Objective: Explain how tree invariants support ordered operations and how balancing controls path length.

1. Tree vocabulary, representations, and height
2. Recursive and iterative traversals with explicit base cases
3. Binary-search-tree search and insertion
4. Binary-search-tree deletion and duplicate-key policies
5. Height, skewed trees, and degeneration
6. AVL rotations, stored heights, and rebalancing
7. Augmentation, subtree sizes, ranks, and range queries
8. B-trees and external-memory cost models

Worked illustrations: Build an ordered depot index and draw search paths in balanced and chain-shaped trees. Trace all BST deletion cases. Use an induction argument for traversal and a call-stack picture before relying on recursion. Show rotations preserving in-order content, then update height/size metadata. AVL is the principal balancing scheme; red-black trees are comparative signposts rather than a second full case catalogue. Contrast memory operations with block transfers for a B-tree; Python dict is not an ordered search tree.

Outcome: Trace ordered-tree operations, explain balancing and augmentation, and recognise when a different memory model changes the design.

Bridge: Some workloads need only the next most urgent item rather than a fully ordered index.

## Chapter 7 — Heaps and Priority-Driven Processing

Objective: Maintain and use priority order without assuming the entire collection is sorted.

1. Priority-queue contracts, ties, and application requirements
2. Binary heap layout, indexing, and heap invariants
3. Insertion, removal, and upward/downward repair
4. Bottom-up construction and its linear-time argument
5. Heapsort and its time/space/stability trade-offs
6. Top-k selection, multiway merge, and scheduling
7. Changing priorities, indexed heaps, and stale entries

Worked illustrations: Trace the urgent-parcel queue through insert/pop operations and compare heap layout with sorted order. Explain why summing repair work by node height gives a tighter build bound than charging every node full height. Use `(priority, sequence, item)` entries to resolve ties without requiring arbitrary items to be mutually comparable. Compare an indexed decrease-key design with lazy stale-entry handling using `heapq`; account for extra entries and memory. Separate the generic heap model from library-specific APIs.

Outcome: Explain a heap's invariant, derive key operation costs, and choose an appropriate priority-update design.

Bridge: Priority selects among known candidates; next we explore how to generate candidates when choices form a search space.

## Chapter 8 — Recursion, Exhaustive Search, and Pruning

Objective: Model a search space and explain which branches an exact search may safely discard.

1. Recursive contracts, progress, base cases, and call state
2. State-space trees and candidate generation
3. Backtracking, mutation, undo, and copied state
4. Permutations, subsets, and combinations
5. Duplicate handling and canonical enumeration
6. Constraint pruning, bounds, and branch-and-bound
7. Explicit stacks, depth limits, and exponential growth

Worked illustrations: Assign a few parcels to vehicles with stated capacity constraints, drawing the explored tree and undo sequence. Compare copying each candidate state with mutation/restoration costs. Show a valid feasibility prune and an incorrect prune that removes an optimal answer. Distinguish a feasible incumbent from a proven optimum. Explain Python recursion limits and explicit-stack alternatives; replacing recursion with iteration does not remove an exponential search space. Bit masks provide a compact subset representation, with integer-width costs stated.

Outcome: Construct and trace a bounded exhaustive search, justify pruning, and explain its resource limits.

Bridge: Many relationships share states and cycles rather than form a tree; graphs provide the more general model.

## Chapter 9 — Graph Representation and Traversal

Objective: Represent relationships and explain traversal results using frontier, visitation, and path invariants.

1. Directed, undirected, weighted, and multigraph models
2. Adjacency lists, matrices, and operation requirements
3. Breadth-first search, distances, and path reconstruction
4. Depth-first search, discovery/finish state, and edge reasoning
5. Components, reachability, and cycle detection
6. Topological ordering and dependency execution
7. Strongly connected components and condensation
8. Representation-dependent time/space and traversal choices

Worked illustrations: Model depots and dependency tasks separately. Trace BFS queue layers and parent pointers; limit its shortest-path claim to equal/unit-cost edges. Compare DFS active-path state with a single visited flag for directed cycle detection. Show a topological-order failure on a cycle and disconnected components requiring multiple starts. Explain SCCs through one representative algorithm with its two-pass or low-link reasoning made explicit. Compare O(V+E) adjacency-list traversal with matrix scanning, counting vertex/edge storage and recursion/frontier space.

Outcome: Choose a graph representation, interpret traversal evidence, and explain reachability, cycles, and dependency order.

Bridge: Weighted edges introduce optimisation objectives that ordinary traversal alone cannot settle.

## Chapter 10 — Shortest Paths and Spanning Networks

Objective: Select weighted-graph methods from their objectives, preconditions, and correctness arguments.

1. Relaxation, path bounds, predecessors, and unreachable vertices
2. DAG shortest paths and topological processing
3. Dijkstra's algorithm and nonnegative-edge requirements
4. Bellman–Ford and reachable negative cycles
5. All-pairs paths and Floyd–Warshall
6. Spanning trees, forests, cut/cycle properties, and objectives
7. Disjoint-set union, rank/size, and path compression
8. Kruskal and Prim with representation-specific costs

Worked illustrations: Trace distance relaxations and finalisation with a priority queue; show a negative-edge counterexample to the standard Dijkstra guarantee. Account for lazy heap entries rather than assuming a decrease-key API. Explain how a reachable negative cycle affects which destinations have well-defined finite shortest paths. Contrast a minimum spanning tree with a shortest-path tree and a tour. Walk through union/find and Kruskal; state amortised bounds and preprocessing assumptions. Choose one graph for competing methods and include disconnected input.

Outcome: Explain a weighted-graph solution, check its assumptions, and justify an algorithm and implementation strategy.

Bridge: These graph algorithms suggest a broader question: when is a locally best choice globally justified?

## Chapter 11 — Greedy Design and Exchange Reasoning

Objective: Distinguish a justified greedy strategy from an attractive but incorrect local rule.

1. Feasibility, optimisation objectives, and greedy choices
2. Exchange arguments and preservation of an optimal solution
3. Interval scheduling and compatible choices
4. Huffman coding, prefix codes, and priority queues
5. Counterexamples, weighted objectives, and reformulation
6. Connections to graph greedy proofs and design selection

Worked illustrations: Prove the earliest-finish interval choice with a small exchange argument and then generalise its role. Contrast weighted interval scheduling, where the same rule can fail. Build a small Huffman tree and calculate encoded length; describe the assumptions of the coding model. Revisit cut reasoning for spanning trees. Separate a proof for one formulation from a heuristic for a changed problem; greedy is a design approach, not a universal speed-up rule.

Outcome: Explain a greedy correctness argument, construct counterexamples to unsupported rules, and identify when another paradigm is needed.

Bridge: When a choice changes future possibilities in richer ways, preserve the relevant state instead of committing prematurely.

## Chapter 12 — Dynamic Programming and State Design

Objective: Derive a dynamic program from a precise subproblem and explain its evaluation order and result.

1. Overlapping subproblems, optimal substructure, and dependency graphs
2. State meaning, recurrence, base cases, and correctness
3. Memoisation, tabulation, and valid dependency order
4. Reconstructing a solution and handling ties
5. Sequence problems, longest common subsequence, and edit distance
6. Capacity constraints, subset sum, and 0/1 knapsack
7. Interval problems and DAG-based formulations
8. Space reduction, state count, transition cost, and pseudopolynomial limits

Worked illustrations: Move from a repeated recursive computation to its memo table and dependency DAG. Define a knapsack state's item/capacity meaning before writing transitions. Show how a missing state component or incorrect in-place loop order changes 0/1 behaviour. Annotate small edit-distance and interval tables with recovered choices. Compute cost as states times transition work where applicable, rather than assuming every DP is quadratic. Explain why a bound polynomial in numeric capacity need not be polynomial in its binary encoding length; reduce storage only when dependency and reconstruction requirements permit it.

Outcome: Define and justify a DP state/recurrence, trace evaluation and reconstruction, and explain resource bounds and limitations.

Bridge: Text provides another structured domain where repeated comparison can be replaced by reusable information.

## Chapter 13 — Strings and Prefix-Based Structures

Objective: Explain text-search algorithms through their comparison units, stored information, and failure behaviour.

1. Symbols, encoding, Unicode, and units of comparison
2. Tries, prefix lookup, and representation choices
3. Naive substring matching and overlapping candidates
4. Prefix functions, failure links, and KMP
5. Rolling hashes, collisions, and verified matches
6. Suffix arrays and longest-common-prefix introduction
7. Workload, preprocessing, alphabet, and memory trade-offs

Worked illustrations: Search parcel labels with a trie and a substring algorithm, distinguishing their queries. Trace naive matching and KMP on repeated-prefix input. Explain what a prefix-function entry means before following failure links. Compare hash-only equality with verifying candidate matches and account for collision-driven work. Python strings expose Unicode code points, which do not necessarily correspond to displayed grapheme clusters; normalisation and comparison semantics belong in the contract. Suffix arrays/LCP are advanced comparative illustrations rather than a full linear-construction survey. Do not assume Python's built-in substring search implements the teaching algorithm.

Outcome: Choose a text-search representation, explain matching traces, and justify preprocessing and collision/encoding assumptions.

Bridge: The available methods now need a final decision framework that also recognises computational limits.

## Chapter 14 — Computational Limits and Integrated Algorithm Design

Objective: Combine modelling, correctness, complexity, and engineering evidence to justify a solution approach.

1. Decision versus optimisation formulations and input encoding
2. Polynomial reductions and the direction of a hardness argument
3. P, NP, NP-hard, and NP-complete distinctions
4. Approximation guarantees and heuristic evidence
5. Randomisation, expectation, and failure probability
6. Online decisions, competitive reasoning, and information limits
7. Prefix sums, Fenwick trees, and segment-tree range-query comparison
8. Specialist directions and explicit scope boundaries
9. Integrated workload, algorithm, representation, and evidence review

Worked illustrations: Use a small certificate/verifier and reduction diagram to distinguish efficient verification from a known efficient solution. Explain that P versus NP remains unresolved and hardness does not make every instance difficult. Contrast a stated approximation guarantee with a good observed heuristic result. Revisit parcel capacity and route objectives to show how changed formulations alter algorithm choices. Compare static prefix sums with dynamic Fenwick/segment-tree queries, identifying the supported aggregate/update operations. Finish with the planner's workload, constraints, invariants, costs, library assumptions, and failure cases in one decision record; benchmarking follows a correct candidate and stated model.

Outcome: Explain computational limits without overstating them, compare exact/approximate/heuristic choices, and justify an integrated algorithm design.

Bridge: Continue with implementation experience, deeper discrete mathematics, algorithms proofs, and specialist structures or domains. Practical expertise requires practice and feedback beyond completion of this course.

## Sources and scope

Sources checked on **2026-10-12** support curriculum comparison and selected conceptual checks. They do not establish an exhaustive proof/API audit or an executed algorithm lab.

- MIT OCW [6.006 syllabus](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/syllabus/), [calendar](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/calendar/), and [lecture-note index](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/), Spring 2020, support prerequisite and progression comparison. Selected fetched notes inspected: [AVL trees](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/a2c80596cf4a2b5fbc854afdd2f23dcb_MIT6_006S20_lec7.pdf), [heaps](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/40d4851e550507ca14dc778b9b2266cc_MIT6_006S20_lec8.pdf), [BFS](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/196a95604877d326c6586e60477b59d4_MIT6_006S20_lec9.pdf), [Dijkstra](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/d819e7f4568aced8d5b59e03db6c7b67_MIT6_006S20_lec13.pdf), [recursive/DP design](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/9eb3e9a51a7b5b60b0f67c2277f8b0ee_MIT6_006S20_lec15.pdf), and [complexity](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/fda666a4db1dc65b3d71be08115502bd_MIT6_006S20_lec19.pdf). University assessments are source content, not course requirements here.
- Cormen, Leiserson, Rivest, and Stein, [Introduction to Algorithms, fourth edition](https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/), 2022: publisher description and [contents](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/11599/4e_toc.pdf) inspected for coverage, paradigms, and specialist boundaries. Full text was not accessed; no full-book reading or ranking of all available books is claimed.
- Pat Morin, [Open Data Structures, Java edition 0.1G](https://opendatastructures.org/ods-java/): contents and selected chapter introductions inspected. Additional author-hosted [pseudocode edition](https://opendatastructures.org/ods-python/) material inspected for [resizing/amortisation](https://opendatastructures.org/ods-python/2_1_ArrayStack_Fast_Stack_O.html), [chained hashing](https://opendatastructures.org/ods-python/5_1_ChainedHashTable_Hashin.html), and the [red-black-tree introduction](https://opendatastructures.org/ods-python/9_Red_Black_Trees.html). Despite its URL, that edition identifies itself as pseudocode. Neither complete edition was read; AVL remains the principal balancing example.
- Python 3.14 documentation for [built-in types](https://docs.python.org/3.14/library/stdtypes.html), [deque](https://docs.python.org/3.14/library/collections.html#collections.deque), [bisect](https://docs.python.org/3.14/library/bisect.html), and [heapq](https://docs.python.org/3.14/library/heapq.html) supports targeted language/library boundaries. Do not generalise implementation-specific complexity or growth factors into universal Python guarantees.

The Princeton Algorithms site returned 403 during research and supplied no inspected evidence. Detailed lessons still need algorithm-specific verification for full rotation/deletion cases, greedy proofs, string matching, range-query structures, and advanced reductions; the current plan specifies the intended reasoning and limits. All illustrative code/output is lesson scope, not a claim that examples were executed during TOC authoring.

Boundaries: full network flow/matching, computational geometry, FFT/numerical methods, cryptographic number theory, parallel/distributed algorithms, persistent/succinct structures, and exhaustive competitive-programming patterns need separate depth. Advanced topics within this plan are bounded introductions where stated. Maintain explicit randomness, input distribution, graph weights, alphabet, key size, numeric encoding, and storage assumptions when authoring lessons.
