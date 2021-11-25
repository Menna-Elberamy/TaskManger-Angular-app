import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-work-tasks',
  templateUrl: './work-tasks.component.html',
  styleUrls: ['./work-tasks.component.css']
})
export class WorkTasksComponent implements OnInit {

  constructor(public TasksService:TasksService) {

  }

  ngOnInit(): void {
  }

  onDeleteTask(i,category){
    this.TasksService.onDeleteTask(i,category);
    console.log(category)
  }
  onDoneTask(i,category){
    this.TasksService.onDoneTask(i,category);
    console.log(category)
    console.log(this.TasksService.doneTasks)
  }
}
