import { Injectable } from '@angular/core';
import { TimetableInterface }from '../types/timetable.interface'
import data from 'src/data';
import { LessonInterface } from '../types/lesson.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private timetable: TimetableInterface[] = data;

  constructor() { }

  getAll() {
    return this.timetable
  }

  getById(id: string):LessonInterface {
    let l: LessonInterface;
    this.timetable.forEach(week => {
      week.lessons.forEach(lesson => {
        if(lesson.id === id) {
          l = lesson;
        }
      });
    })
    return l!
  }

  getLesson(lessonIndex: string): LessonInterface | null {
    let getLesson: LessonInterface | null = {name: '', id: '', time: ''};
    this.timetable.forEach(week => {
      week.lessons.forEach(lesson => {
        if(lesson.id === lessonIndex) {
          getLesson = lesson
        }
      });
    })
    return getLesson
  }

  editLesson(newLesson: LessonInterface): void {
    this.timetable = this.timetable.map(
      week => {
        return {
          date: week.date,
          lessons: week.lessons.map(lesson => {
            if(lesson.id === newLesson.id) {
              return newLesson
            }
            return lesson
          })
        }
      })
    }
  }

