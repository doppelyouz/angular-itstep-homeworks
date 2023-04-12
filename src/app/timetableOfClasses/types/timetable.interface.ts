import { LessonInterface } from "./lesson.interface"

export interface TimetableInterface {
  date: string
  lessons: LessonInterface[]
}
