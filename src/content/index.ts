import { ch01 } from './ch01'
import { ch02 } from './ch02'
import { ch03 } from './ch03'
import { ch04 } from './ch04'
import { ch05 } from './ch05'
import type { Course, Section } from './types'

// Course registry, in syllabus order — one course per chapter of DSA-COURSE-PLAN.md. Courses are
// added here as each is authored.
export const COURSES: Record<string, Course> = {
  [ch01.id]: ch01,
  [ch02.id]: ch02,
  [ch03.id]: ch03,
  [ch04.id]: ch04,
  [ch05.id]: ch05,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract every recorder drives, so it cannot be a per-repo decision. Re-exported here
// because this module is what the app and the scripts import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
