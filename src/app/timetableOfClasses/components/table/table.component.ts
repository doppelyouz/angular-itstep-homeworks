import { Component, DoCheck, OnInit } from '@angular/core';
import data from 'src/data';
import { TimetableInterface } from '../../types/timetable.interface';
import { ScheduleService } from '../../services/schedule.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, DoCheck {
  dates: TimetableInterface[] = []
  constructor(private service: ScheduleService) {}

  ngDoCheck(): void {
    this.dates = this.service.getAll();
  }
  ngOnInit(): void {
    this.dates = this.service.getAll();
  }
}
