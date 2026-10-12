import { ch01 } from './ch01'
import { ch02 } from './ch02'
import { ch03 } from './ch03'
import { ch04 } from './ch04'
import { ch05 } from './ch05'
import { ch06 } from './ch06'
import { ch07 } from './ch07'
import { ch08 } from './ch08'
import { ch09 } from './ch09'
import { ch10 } from './ch10'
import { ch11 } from './ch11'
import { ch12 } from './ch12'
import { ch13 } from './ch13'
import { ch14 } from './ch14'
import type { Course, Section } from './types'

// Course registry, in syllabus order — one course per chapter of DSA-COURSE-PLAN.md. Courses are
// added here as each is authored.
export const COURSES: Record<string, Course> = {
  [ch01.id]: ch01,
  [ch02.id]: ch02,
  [ch03.id]: ch03,
  [ch04.id]: ch04,
  [ch05.id]: ch05,
  [ch06.id]: ch06,
  [ch07.id]: ch07,
  [ch08.id]: ch08,
  [ch09.id]: ch09,
  [ch10.id]: ch10,
  [ch11.id]: ch11,
  [ch12.id]: ch12,
  [ch13.id]: ch13,
  [ch14.id]: ch14,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract every recorder drives, so it cannot be a per-repo decision. Re-exported here
// because this module is what the app and the scripts import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
