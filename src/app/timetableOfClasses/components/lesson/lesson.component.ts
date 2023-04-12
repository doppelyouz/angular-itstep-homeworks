import { Component, Input } from '@angular/core';
import { LessonInterface } from '../../types/lesson.interface';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
  @Input() lesson!: LessonInterface
}
