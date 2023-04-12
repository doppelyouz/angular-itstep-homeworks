import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { WeekComponent } from './components/week/week.component';
import { LessonPageComponent } from './components/lesson-page/lesson-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: 'timetable',
      component: TableComponent
  },
  {
      path: 'lesson/:id',
      component: LessonPageComponent
  },
]

@NgModule({
    declarations: [
        TableComponent,
        LessonComponent,
        WeekComponent,
        LessonPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule
    ]
})
export class TimetableModule { }
