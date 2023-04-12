import { Component, Input } from '@angular/core';
import { TimetableInterface } from '../../types/timetable.interface';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent {
  @Input() week!: TimetableInterface
}
