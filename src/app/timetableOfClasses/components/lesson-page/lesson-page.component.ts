import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LessonInterface } from '../../types/lesson.interface';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.scss']
})
export class LessonPageComponent implements OnInit, DoCheck{

  id!: string;
  lesson: LessonInterface | undefined
  isEditing: boolean = false
  newName?: string
  newTime?: string

  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private service: ScheduleService) {
    this.routeSubscription = route.params.subscribe(params=> this.id=params['id']);
  }

  ngOnInit(): void {
    this.lesson = this.service.getById(this.id)

    this.newName = this.lesson?.name
    this.newTime = this.lesson?.time
  }

  onEdit():void {
    this.isEditing = !this.isEditing
    if(!this.isEditing) {
      const newLesson:LessonInterface = {
        id: this.id,
        name: this.newName as string,
        time: this.newTime as string
      }
      this.service.editLesson(newLesson)
    }
  }
  ngDoCheck(): void {
    this.lesson = this.service.getById(this.id)
  }
}
